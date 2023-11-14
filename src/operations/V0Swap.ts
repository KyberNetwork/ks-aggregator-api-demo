import { getSwapRouteEncodedV0 } from "../apis/V0Get";
import { getTokenApproval } from "../libs/approval";
import { tokenIn } from "../libs/constants";
import { getSigner } from "../libs/signer";


export async function V0Swap() {
    // Get the swap data required to execute the transaction on-chain
    const swapData = await getSwapRouteEncodedV0();
    const encodedSwapData = swapData.encodedSwapData;
    const routerContract = swapData.routerAddress;

    // Use the configured signer to submit the on-chain transactions
    const signer = getSigner();
    const signerAddress = await signer.getAddress();

    // Ensure that the router contract has sufficient allowance
    await getTokenApproval(
        tokenIn.address,
        routerContract,
        swapData.inputAmount
    );

    // Execute the swap transaction
    console.log(`\n Executing the swap tx on-chain...`);
    console.log(`Encoded data: ${encodedSwapData}`);
    console.log(`Router contract address: ${routerContract}`);
    const executeSwapTx = await signer.sendTransaction({
        data: encodedSwapData,
        from: signerAddress,
        to: routerContract,
        maxFeePerGas: 10000000000000,
        maxPriorityFeePerGas: 10000000000000        
    });

    const executeSwapTxReceipt = await executeSwapTx.wait();
    console.log(`Swap tx executed with hash: ${executeSwapTxReceipt?.hash}`);
};