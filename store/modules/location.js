import axios from 'axios'
import { API_LOCATION } from '../../api/location'

export const getProvince = async () => {
    try {
        const res = await axios.get(API_LOCATION)
        return res
    } catch (error) {
        console.log(error);
    }
}