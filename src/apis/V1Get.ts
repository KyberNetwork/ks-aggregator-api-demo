import axios from "axios";
import { AggregatorDomain, ChainName, tokenIn, tokenOut } from "../libs/constants";

export async function getSwapRouteV1() {
    // Get the path to be called
    const targetChain = ChainName.MATIC;
    const targetPath = `/${targetChain}/api/v1/routes`;

    // Specify the call parameters (only the required params are specified here, see Docs for full list)
    const targetPathConfig = {
        params: {
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: Number(1*10**tokenIn.decimals).toString()
        }
    };

    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [V1] Get Swap Route...`);
        const {data} = await axios.get(
            AggregatorDomain+targetPath,
            targetPathConfig
        )

        console.log(`[V1] GET Response:`);
        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    };

};