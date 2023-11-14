import axios from "axios";
import { AggregatorDomain, ChainName, tokenIn, tokenOut } from "../libs/constants";
import { getSigner } from "../libs/signer";

export async function getSwapRouteEncodedV0() {
    // Get the path to be called
    const targetChain = ChainName.MATIC;
    const targetPath = `/${targetChain}/route/encode`;

    // Get the signer's address
    const signer = getSigner()
    const signerAddress = await signer.getAddress();

    // Specify the call parameters (only the required params are specified here, see Docs for full list)
    const targetPathConfig = {
        params: {
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: Number(1*10**tokenIn.decimals).toString(),
            to: signerAddress,
            slippageTolerance: 10 //0.1%
        }
    };

    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [V0] Get Swap Info with Encoded Data...`);
        const {data} = await axios.get(
            AggregatorDomain+targetPath,
            targetPathConfig
        )

        console.log(`[V0] GET Response:`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    };

};