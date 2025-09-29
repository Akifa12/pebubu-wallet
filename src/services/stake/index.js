import { axiosJSONPublic } from "../axiosJSONPublic"
import { BACKEND_URL } from "../config"

export const stake = async (userId, amount) => {
    await axiosJSONPublic.post(`${BACKEND_URL}/api/stake/stake`, {
        userId, amount
    })
}