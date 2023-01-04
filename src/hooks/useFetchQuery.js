import React, { useEffect, useState } from "react";

const useFetchQuery = (query, params) => {
    const [fetcher, setFetcher] = useState(false)
    console.log(fetcher)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchQuery = async () => {
        try {
            setLoading(true)
            const response = await query(params)
            setData(response?.data)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchQuery()
    }, [params, fetcher])

    return {
        data, loading, error, setFetcher
    }
}

export default useFetchQuery