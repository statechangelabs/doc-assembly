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

export interface TermReaderInterface extends utils.Interface {
  functions: {
    "globalTerm(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "globalTerm"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "globalTerm",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "globalTerm", data: BytesLike): Result;

  events: {
    "GlobalRendererChanged(string)": EventFragment;
    "GlobalTemplateChanged(string)": EventFragment;
    "GlobalTermChanged(bytes32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GlobalRendererChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GlobalTemplateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GlobalTermChanged"): EventFragment;
}

export interface GlobalRendererChangedEventObject {
  _renderer: string;
}
export type GlobalRendererChangedEvent = TypedEvent<
  [string],
  GlobalRendererChangedEventObject
>;

export type GlobalRendererChangedEventFilter =
  TypedEventFilter<GlobalRendererChangedEvent>;

export interface GlobalTemplateChangedEventObject {
  _template: string;
}
export type GlobalTemplateChangedEvent = TypedEvent<
  [string],
  GlobalTemplateChangedEventObject
>;

export type GlobalTemplateChangedEventFilter =
  TypedEventFilter<GlobalTemplateChangedEvent>;

export interface GlobalTermChangedEventObject {
  _term: string;
  _value: string;
}
export type GlobalTermChangedEvent = TypedEvent<
  [string, string],
  GlobalTermChangedEventObject
>;

export type GlobalTermChangedEventFilter =
  TypedEventFilter<GlobalTermChangedEvent>;

export interface TermReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TermReaderInterface;

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
    globalTerm(
      _term: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { _value: string }>;
  };

  globalTerm(
    _term: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    globalTerm(
      _term: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "GlobalRendererChanged(string)"(
      _renderer?: PromiseOrValue<string> | null
    ): GlobalRendererChangedEventFilter;
    GlobalRendererChanged(
      _renderer?: PromiseOrValue<string> | null
    ): GlobalRendererChangedEventFilter;

    "GlobalTemplateChanged(string)"(
      _template?: PromiseOrValue<string> | null
    ): GlobalTemplateChangedEventFilter;
    GlobalTemplateChanged(
      _template?: PromiseOrValue<string> | null
    ): GlobalTemplateChangedEventFilter;

    "GlobalTermChanged(bytes32,bytes32)"(
      _term?: PromiseOrValue<BytesLike> | null,
      _value?: null
    ): GlobalTermChangedEventFilter;
    GlobalTermChanged(
      _term?: PromiseOrValue<BytesLike> | null,
      _value?: null
    ): GlobalTermChangedEventFilter;
  };

  estimateGas: {
    globalTerm(
      _term: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    globalTerm(
      _term: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}