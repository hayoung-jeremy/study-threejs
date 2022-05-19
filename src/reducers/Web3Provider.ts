import Web3 from "web3"

export type Web3ProviderState = {
  web3Provider: Web3 | null | undefined
  address: string | null | undefined
  network: number | null | undefined
  vestingContract: any | null | undefined
  connect: (() => Promise<void>) | null
  disConnect: (() => Promise<void>) | null
  claimToken: (() => Promise<void>) | null
}

export const web3InitialState: Web3ProviderState = {
  web3Provider: null,
  address: null,
  network: null,
  vestingContract: null,
  connect: null,
  disConnect: null,
  claimToken: null,
}

export type Web3Action =
  | {
      type: "SET_WEB3_PROVIDER"
      web3Provider?: Web3ProviderState["web3Provider"]
      address?: Web3ProviderState["address"]
      network?: Web3ProviderState["network"]
      vestingContract?: Web3ProviderState["vestingContract"]
    }
  | {
      type: "SET_ADDRESS"
      address?: Web3ProviderState["address"]
    }
  | {
      type: "SET_NETWORK"
      network?: Web3ProviderState["network"]
    }
  | {
      type: "RESET_WEB3_PROVIDER"
    }

export const web3Reducer = (
  state: Web3ProviderState,
  action: Web3Action
): Web3ProviderState => {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        web3Provider: action.web3Provider,
        address: action.address,
        network: action.network,
        vestingContract: action.vestingContract,
      }
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      }
    case "SET_NETWORK":
      return {
        ...state,
        network: action.network,
      }
    case "RESET_WEB3_PROVIDER":
      return web3InitialState
    default:
      throw new Error()
  }
}
