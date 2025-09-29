import { axiosJSONPublic } from "../axiosJSONPublic"
import { BACKEND_URL } from "../config"

export const withdraw = async ( userId, walletAddress) => {
    await axiosJSONPublic.post(`${BACKEND_URL}/api/withdraw/withdraw`, {
        userId, walletAddress
    })
}