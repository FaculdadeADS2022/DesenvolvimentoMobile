import { Article } from "../../../data/model";

export interface UseListNewsResult {
   isLoading: boolean,
   articles: Article[],
}