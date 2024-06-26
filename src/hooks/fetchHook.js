import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {

        setIsLoading(true)
        try {
            const res = await axios.get('https://localhost')
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    const refetch = () => {
        setIsLoading(true);
        fetchData()
    }

    return { data, isLoading, error, refetch }
}