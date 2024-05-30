import axios from 'axios'
import { API_URL } from '@env'

const APIE = async (method: string, url: string, data?: any) => {
    try {
        const res = await axios({
            method,
            url: `${API_URL}${url}`,
            data,
            headers: { "Content-Type": "multipart/form-data" },
        })
        return res.data
    } catch (e: any) {
        return { success: false, data: e?.response?.data || "Please check your internet connection", status: "404" }
    }
}

export * from './firebase'