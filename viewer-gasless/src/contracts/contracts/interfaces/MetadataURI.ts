/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MetadataURIInterface extends utils.Interface {
  functions: {
    "URI()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "URI"): FunctionFragment;

  encodeFunctionData(functionFragment: "URI", values?: undefined): string;

  decodeFunctionResult(functionFragment: "URI", data: BytesLike): Result;

  events: {
    "UpdatedURI(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdatedURI"): EventFragment;
}

export interface UpdatedURIEventObject {
  uri: string;
}
export type UpdatedURIEvent = TypedEvent<[string], UpdatedURIEventObject>;

export type UpdatedURIEventFilter = TypedEventFilter<UpdatedURIEvent>;

export interface MetadataURI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetadataURIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    URI(overrides?: CallOverrides): Promise<[string] & { _uri: string }>;
  };

  URI(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    URI(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "UpdatedURI(string)"(uri?: null): UpdatedURIEventFilter;
    UpdatedURI(uri?: null): UpdatedURIEventFilter;
  };

  estimateGas: {
    URI(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    URI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
