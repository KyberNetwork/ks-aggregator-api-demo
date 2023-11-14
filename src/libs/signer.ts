import { ethers } from "ethers";
import { getProvider } from "./provider";

export function getSigner(): ethers.Signer {
    /*
    Replace this private key with your Polygon account private key
    To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key
    CAUTION: Never expose your private keys (i.e. commit to a public repo)
    */
    const MATIC_PRIVATE_KEY = "<YOUR_PRIVATE_KEY_HERE>";

    // Return a new Wallet instance which handles private keys directly  
    return new ethers.Wallet(MATIC_PRIVATE_KEY, getProvider());
}