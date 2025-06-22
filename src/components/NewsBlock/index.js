"use client";

import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewsBlock({ news }) {
	return (
		<Card className='flex flex-col justify-between items-center text-center sm:w-[611px] w-full sm:h-[611px] shadow-lg rounded-lg overflow-hidden'>
			<CardHeader className='w-full p-0'>
				{news.urlToImage ? (
					<Image
						src={news.urlToImage}
						width={555}
						height={300}
						alt={news.title}
						className='w-full h-[300px] object-cover rounded-t-lg'
					/>
				) : (
					<div className='w-full h-[300px] bg-gray-200 dark:bg-[#030711] flex items-center justify-center'>
						<span>No Image</span>
					</div>
				)}
				<div className='p-4'>
					<CardTitle className='text-lg font-semibold mb-2'>
						{news.title}
					</CardTitle>
					<CardDescription className='text-sm text-gray-500 dark:text-gray-200'>
						{news.description ? (
							<span>{news.description}</span>
						) : (
							<span>No Description</span>
						)}
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className='flex flex-col items-center gap-2'>
				<p className='text-sm text-gray-700 dark:text-gray-300'>
					Author:{" "}
					{news.author ? <span>{news.author}</span> : <span>No Author</span>}
				</p>
			</CardContent>
			<CardFooter className='flex flex-col items-center gap-2 mb-4'>
				<p className='text-xs text-gray-500'>
					Published: {new Date(news.publishedAt).toLocaleDateString()}
				</p>
				<Button className='bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
					<Link href={news.url}>Read full article →</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
