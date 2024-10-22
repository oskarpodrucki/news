import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NewsBlock({news}){
    return(
<Card className="flex flex-col justify-center items-center text-center mt-5 ml-5 w-[555px] h-[555px]">
  <CardHeader>
    {news.urlToImage ? (<Image
    src={news.urlToImage}
    width={400}
    height={250}
    alt={news.title}
    className="w-[400px] h-[250px]"
    />
    ) : (
        <div>
            No Image
        </div>
    )}
    <CardTitle>{news.title}</CardTitle>
    <CardDescription>{news.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{news.author}</p>
  </CardContent>
  <CardFooter>
    <p>{news.publishedAt}</p>
  </CardFooter>
  <Button><Link href={news.url}>More</Link></Button>
</Card>
    )
}