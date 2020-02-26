import axios from 'axios'
const baseUrl = process.env._AXIOS_BASE_URL_ || 'http://localhost:3000'
const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getThings() {
    return apiClient.get('things')
  }
}
