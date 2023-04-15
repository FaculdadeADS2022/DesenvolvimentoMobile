import { useEffect, useState } from "react";
import { Article } from "../../../data/model";
import { newsService } from "../../../data/service";
import { UseListNewsResult } from "./interface";

const useListNews = (): UseListNewsResult => {
   const [isLoading, setIsLoading] = useState(false)
   const [articles, setArticles] = useState<Article[]>([])

   const getHeadLines = async (): Promise<Article[]> => {
      const result = await newsService.getHeadLines()

      return result
   }

   useEffect(() => {

      const loadingHeadLines = async () => {
         setIsLoading(true)
         const result = await getHeadLines()
         setIsLoading(false)
         setArticles(result)
      }

      loadingHeadLines()
   }, [])

   return{
      isLoading,
      articles
   }
}

export default useListNews;