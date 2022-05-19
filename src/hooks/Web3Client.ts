import { useCallback, useEffect, useReducer, useRef } from "react"

import Web3 from "web3"
import {
  Web3Action,
  web3InitialState,
  Web3ProviderState,
  web3Reducer,
} from "../reducers"

import { toast } from "react-toastify"

import { _ETH_NETWORK } from "../data/chainNetwrok"

declare let window: any

let web3: Web3 | null

const checkAddress = (nowAddress: string) => {
  let isChange = false
  const cache = localStorage.getItem("tava3Cache")

  if (cache !== nowAddress || !cache) {
    localStorage.setItem("tava3Cache", nowAddress)
    if (nowAddress) isChange = true
  }
  return isChange
}

export const useWeb3 = () => {
  const [state, dispatch] = useReducer(web3Reducer, web3InitialState)
  const { address, network, web3Provider, vestingContract } = state
  const blockReload = useRef(false)

  const connect = useCallback(async () => {
    if (typeof window !== "undefined") {
      web3 = new Web3(Web3.givenProvider)
    }

    if (web3) {
      try {
        const web3Provider = web3
        const account = await web3Provider.eth.requestAccounts()
        const network = await web3Provider.eth.net.getId()

        if (network === _ETH_NETWORK.Rinkeby.id) {
          checkAddress(account[0])

          // const vestingContract = new web3Provider.eth.Contract(
          //   vestingAbi,
          //   vestingAddress
          // )

          dispatch({
            type: "SET_WEB3_PROVIDER",
            web3Provider,
            address: localStorage.getItem("tava3Cache"),
            network,
            vestingContract,
          } as Web3Action)

          toast.success("Connected to Web3")
        } else {
          toast.error(`Please Change Network to ${_ETH_NETWORK.Rinkeby.name}`)
        }
      } catch (e) {
        toast.error("Please Download MetaMask")
        console.log("connect Error", e)
      }
    } else {
      toast.error("Please Download MetaMask Or Reload Browser")
    }
  }, [])

  const disConnect = useCallback(async () => {
    if (web3) {
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      } as Web3Action)
      localStorage.removeItem("tava3Cache")
      blockReload.current = false

      toast.error("Disconnected from Web3")
    }
  }, [])

  const handleAccountChanged = (account: string[]) => {
    if (checkAddress(account[0])) {
      const address = localStorage.getItem("tava3Cache")
      dispatch({
        type: "SET_ADDRESS",
        address,
      } as Web3Action)

      if (address) toast.info("Changed Web3 Account")
    } else {
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      })
      toast("Good Bye...")
    }
  }

  const handleChainChanged = (_hexChainId: string) => {
    if (typeof window !== "undefined") {
      console.log("switched to chain...", _hexChainId)
      window.location.reload()
    } else {
      console.log("window is undefined")
    }
  }

  // claim token
  // const claimToken = useCallback(async () => {
  //   await vestingContract.methods
  //     .claimTokens(address)
  //     .send({ from: address })
  //     .then((res: any) => console.log("claim 완료 : ", res))
  // }, [address])

  // Auto Connect
  useEffect(() => {
    if (localStorage.getItem("tava3Cache") && !blockReload.current) {
      connect()
      blockReload.current = true
    }
  }, [connect])

  // Event Subscribe
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountChanged)
      window.ethereum.on("chainChanged", handleChainChanged)
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountChanged)
        window.ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [])

  return {
    web3Provider,
    address,
    network,
    connect,
    disConnect,
    vestingContract,
    // claimToken,
  } as Web3ProviderState
}
