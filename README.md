# KyberSwap Aggregator API Demo

This repository serves as a guide for developers looking to conduct swaps via the KyberSwap Aggregator APIs in a typescript environment. For simplicity, the examples are implemented purely in Node.js so that users can focus on the backend logic required to achieve swaps at superior rates.

For more performant route querying and, please refer to the `[V1]` implementation:
1. Query Swap Route (`getSwapRouteV1()`)
2. Encode Preferred Swap Route (`postSwapRouteV1()`)
3. Executre Swap Transaction On-Chain (`V1Swap()`)

To aid with readability, each operation has its own `.ts` file which has been categorized under the `/src/operations/` folder. Users can run specific operations by commenting or uncommenting the relevant function in `index.ts`.

## Getting Started

To run the examples:
* Clone this repository
* Install dependencies: `npm install`
* Set up the [ethers.js signer](https://docs.ethers.org/v6/api/providers/#Signer) under `/src/libs/signer.ts`.
* Run dev environment: `npm run start`

## API Specifications

Full API specifications, dev guide, and related sequence diagrams are available on our [Docs](https://docs.kyberswap.com/kyberswap-solutions/kyberswap-aggregator/aggregator-api-specification/evm-swaps):
* [Executing A Swap With The Aggregator API](https://docs.kyberswap.com/kyberswap-solutions/kyberswap-aggregator/developer-guides/execute-a-swap-with-the-aggregator-api)
* [Upgrading To APIv1](https://docs.kyberswap.com/kyberswap-solutions/kyberswap-aggregator/developer-guides/upgrading-to-apiv1)

## Additional Notes

Note that the code samples in this repository are not production-ready and are meant as references to get you started on integrating KyberSwap Aggregator functionality into your dApp.