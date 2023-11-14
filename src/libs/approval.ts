import { ethers } from "ethers";
import ERC20ABI from "../abis/erc20.json";
import { getSigner } from "./signer";


export async function getTokenApproval(
    tokenContractAddress: string,
    spenderAddress: string,
    spendingAmount: number
    ) {
    // Get the owner address
    const signer = getSigner();
    const signerAddress = await signer.getAddress();

    // Check if the spender has sufficient allowance
    const tokenContract = new ethers.Contract(tokenContractAddress, ERC20ABI, signer);
    const limitOrderContractAllowance = await tokenContract.allowance(signerAddress, spenderAddress);
    console.log(`token (${await tokenContract.symbol()}) Allowance: ${limitOrderContractAllowance}`);
    
    
    if (Number(limitOrderContractAllowance) < spendingAmount) {
        console.log(`Insufficient allowance, getting approval for ${await tokenContract.symbol()}...`);
        try {
            // Call the ERC20 approve method
            const approvalTx = await tokenContract.approve(
                spenderAddress, 
                BigInt(spendingAmount), 
                {maxFeePerGas: 100000000000, maxPriorityFeePerGas: 100000000000}
                );
    
            // Wait for the approve tx to be executed
            const approvalTxReceipt = await approvalTx.wait();
            console.log(`Approve tx executed with hash: ${approvalTxReceipt?.hash}`);
    
        } catch(error) {
            console.log(error);
        }
    };    

};