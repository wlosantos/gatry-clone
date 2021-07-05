import axios from "axios"
import { useState } from "react"
import useDeboucendPromise from "./useDebouncedPromise"

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
}

export default function useApi(config) {
  const[requestInfo, setRequestInfo] = useState(initialRequestInfo)
  const debouncedAxios = useDeboucendPromise(axios, config.debouceDelay)

  async function call() {

    setRequestInfo({
      ...initialRequestInfo,
      loading: true
    })

    let response = null

    try {
      response = await debouncedAxios({
        baseURL: 'http://localhost:5000',
        ...config
      })
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data
      })
    } catch(error) {
      setRequestInfo({
        ...initialRequestInfo,
        error
      })
    }

    if (config.onCompleted) {
      config.onCompleted(response)
    }

    return response
  }

  return [
    call,
    requestInfo
  ]
}