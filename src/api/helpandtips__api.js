import axios from "axios"
const API_URL = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"

export async function index() {
  const response = await axios.get(API_URL)
  return response.data
}