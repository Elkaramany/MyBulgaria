import axios from 'axios'

export const API = async (method: string, url: string, data?: any, token?: string) => {
    const headers = {
        "Content-Type": "multipart/form-data",
        "Authorization": token ? `Bearer ${token}` : undefined
    }

    try {
        const res = await axios({
            method,
            url: `${process.env.EXPO_PUBLIC_API_BASE}${url}`,
            data,
            headers
        })
        return res.data
    } catch (e: any) {
        return { success: false, data: e?.response?.data || "Please check your internet connection", status: "404" }
    }
}

export * from './authQuery'
export * from './propertiesQuery'