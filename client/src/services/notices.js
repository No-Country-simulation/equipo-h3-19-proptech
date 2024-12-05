

import axios from "axios";


const key = "D6T1KN96PMQL85BU"
const url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey="




export async function getNotices() {
  try {
    const data = await axios.get(`${url}${key}`)
    const notices = data?.data.feed
    
    // Tomamos un máximo de 4 noticias aleatorias
    const randomNotices = notices?.sort(() => Math.random() - 0.5).slice(0, 4);
    
    return randomNotices

  } catch (error) {
    console.error(error)
  }
}