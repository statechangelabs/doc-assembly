/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TokenTermReader,
  TokenTermReaderInterface,
} from "../../TermReader.sol/TokenTermReader";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "term",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "GlobalTermAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "term",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "TokenTermAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
    ],
    name: "globalTerm",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenTerm",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class TokenTermReader__factory {
  static readonly abi = _abi;
  static createInterface(): TokenTermReaderInterface {
    return new utils.Interface(_abi) as TokenTermReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenTermReader {
    return new Contract(address, _abi, signerOrProvider) as TokenTermReader;
  }
}
