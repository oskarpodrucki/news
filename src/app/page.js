"use client";
import { useState, useEffect } from "react";
import NewsBlock from "@/components/NewsBlock";

export default function Home() {
	const [news, setNews] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getNews = async () => {
			try {
				const res = await fetch(
					"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5627929b66284b3f9c7716d993f001d9"
				);
				const dataJson = await res.json();
				setNews(dataJson);
				console.log(dataJson);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				console.log("Fetch complete");
				setIsLoading(false);
			}
		};
		getNews();
	}, []);

	return (
		<div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-5'>
			{isLoading && (
				<div className='w-full flex justify-center'>
					<p className='text-gray-900 animate-pulse'>Loading news...</p>
				</div>
			)}
			{error && (
				<div className='w-full flex justify-center'>
					<p className='text-red-500'>
						Something went wrong. Please try again later.
					</p>
					<p className='text-red-500'>Error: {error}</p>
				</div>
			)}
			{!isLoading &&
				news?.articles?.map((article, idx) => (
					<NewsBlock key={idx} news={article} />
				))}
		</div>
	);
}
