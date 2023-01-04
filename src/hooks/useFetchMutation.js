import { useState } from "react"
const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMutation = async (data) => {
        try {
            setLoading(true)
            await mutation(data)
            onSuccess?.()
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, fetchMutation }
}

export default useFetchMutation