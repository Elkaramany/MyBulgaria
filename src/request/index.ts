import axios from 'axios'

export const API = async (method: string, url: string, data?: any) => {
    try {
        const res = await axios({
            method,
            url: `${process.env.EXPO_PUBLIC_API_BASE}${url}`,
            data,
            headers: { "Content-Type": "multipart/form-data" },
        })
        return { success: true, data: res.data }
    } catch (e: any) {
        return { success: false, data: e?.response?.data || "Please check your internet connection", status: "404" }
    }
}

export * from './authQuery'
export * from './propertiesQuery'