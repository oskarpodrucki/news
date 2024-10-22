'use client'
import { useState, useEffect } from "react";
import NewsBlock from "@/components/NewsBlock";

export default function Home() {

  const [news, setNews] = useState(null)

  useEffect(() => {
    const getNews = async () => {
      try{
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5627929b66284b3f9c7716d993f001d9")
        const dataJson = await res.json()
        setNews(dataJson)
        console.log(dataJson)
      }catch(error){
        console.log(error)
      }finally{
        console.log("pobrano dane ;)")
      }
    }
    getNews()
  }, [])

  return (
    <div className="flex flex-row flex-wrap justify-center items-center ">
      {news && news.articles && news.articles.map((article, idx) => (
        <NewsBlock key={idx} news={article}/>
      ))}
    </div>
  );
}
