// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Verify {
    function recoverSigner(bytes32 message, bytes memory sig)
        public
        view
        returns (address)
    {
        uint8 v;
        bytes32 r;
        bytes32 s;
        // (v, r, s) = splitSignature(sig);
        // console.log("message here!");
        // console.log(message);
        // console.logBytes32(message);
        // console.log("message:", message);
        // console.log("v:", v);
        // console.logBytes("r:", r);
        // console.logBytes("s:", s);
        address signer = ECDSA.recover(message, sig);
        console.log("signer:", signer);
        return signer;
    }

    function splitSignature(bytes memory sig)
        public
        pure
        returns (
            uint8,
            bytes32,
            bytes32
        )
    {
        require(sig.length == 65);

        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }
        return (v, r, s);
    }
}
