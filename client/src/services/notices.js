

import axios from "axios";


const key = "D6T1KN96PMQL85BU"
const url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey="




const apikey2 = "8c32cc84a639479bb057ced9b362b802"
const lenguage = 'es'
const busqueda = "tecnología"

const url2 = "https://newsapi.org/v2/everything?"



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


export async function getTwoNotices() {
  try {
    const data = await axios.get(`${url2}/language=${lenguage}&q=${busqueda}&apiKey=${apikey2}`)
    const notices = data.data.articles
    
    // Tomamos un máximo de 4 noticias aleatorias
    const randomNotices = notices?.sort(() => Math.random() - 0.5).slice(0, 10);
    
    return randomNotices

  } catch (error) {
    console.error(error)
  }
}