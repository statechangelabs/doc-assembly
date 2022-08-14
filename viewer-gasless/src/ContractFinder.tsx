import { eth_requestAccounts } from "@raydeck/metamask-ts";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import Title from "./Title";
import Topography from "./topography.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ethers } from "ethers";
const supportedChains = [
  { chainId: 137, name: "Polygon Mainnet" },
  { chainId: 80001, name: "Polygon Mumbai Testnet" },
];
const ContractFinder: FC = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{ background: `url(${Topography})` }}
    >
      <div className="flex flex-col space-y-8">
        <Title />
        <h1 className="text-xl font-bold">Find a Smart Contract</h1>
        <div className="flex flex-row justify-center">
          <Formik
            initialValues={{
              contractAddress: "",
              chainID: 137,
            }}
            validate={(values) => {
              const errors: Record<string, any> = {};
              let hasError = false;
              if (!ethers.utils.isAddress(values.contractAddress)) {
                errors.contractAddress = "Invalid address";
                hasError = true;
              }
              if (hasError) {
                console.log("There are errors");
                return errors;
              }
            }}
            validateOnMount={true}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("I received values", values);
              window.location.href =
                window.location.protocol +
                "//" +
                window.location.host +
                "/#/redirect" +
                "::" +
                values.chainID +
                "::" +
                values.contractAddress;
              window.location.reload();
            }}
          >
            {({ values, isValid, isSubmitting }) => (
              <Form>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Blockchain
                  </label>
                  <p className="text-sm leading-5 text-gray-500">
                    Which chain is the smart contract on?
                  </p>

                  <Field as="fieldset" name="chainID" className="mt-4">
                    <legend className="sr-only">Blockchain</legend>
                    <div className="space-y-4">
                      {supportedChains.map(({ chainId, name }) => (
                        <div key={chainId} className="flex items-center">
                          <Field
                            id={"chain_" + chainId}
                            name="chainID"
                            type="radio"
                            checked={chainId == values.chainID}
                            onChange={() => {
                              console.log("I changed", chainId);
                            }}
                            value={chainId}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor={"chain_" + chainId}
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            {name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Field>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="contractAddress"
                    className="block text-base font-medium text-gray-900"
                  >
                    Contract Address
                  </label>
                  <p className="text-sm leading-5 text-gray-500">
                    What is the address (starting with 0x followed by 40
                    characters) of the smart contract?
                  </p>
                  <div className="mt-1">
                    <Field
                      type="text"
                      name="contractAddress"
                      id="contractAddress"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md w-100"
                      placeholder="0x0000000000000000000000000000000000000000"
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="contractAddress"
                    className="text-red-500 font-xs"
                  />
                </div>
                <div className="mt-4">
                  <button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    className={[
                      "btn",
                      isValid && !isSubmitting ? "btn-primary" : "btn-disabled",
                    ].join(" ")}
                  >
                    Find Contract
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="fixed bottom-0 w-screen h-10 p-2 bg-black text-white flex flex-row space-between">
        <div className="text-xs hover:text-purple-400 transition">
          <a href="https://github.com/statechangelabs/polyDocs">
            <FaGithub className="h-6 w-6 mr-2 inline " />
            Source on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContractFinder;
