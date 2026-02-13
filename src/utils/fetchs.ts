import { type expense } from "./types"

export const fetchingDataForTable = async () => {
    try {
        const res = await fetch("data/dataTable.json")
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        const data: expense[] = await res.json()
        return data
    }

    catch (error) {
        console.error(error)
        return []
    }
}

export const fetchingDataForMetric = async () => {
    //fetch data for metric
}
