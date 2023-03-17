import axios from "axios"
import { useEffect, useState } from "react"


export function useRequestData (url: string, token?: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(undefined)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setIsLoading(false)
            setData(response.data)
        }).catch(error => {
            setIsLoading(false)
            setError(error.response.message)
    })}, [url])

    return [isLoading, data, error]
}