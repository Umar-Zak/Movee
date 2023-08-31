import { Movie, SearchQuery } from "../Service/DTOs";
import Https from "./Https";


class MovieService extends Https {
    
    
    searchForMovie = async(queryParams: SearchQuery): Promise<Movie[]> => {
        try {
            const {data}= await this.get<Movie>("",{params: {
                t: queryParams.title,
                y:queryParams.year,
                plot: queryParams.plot
            }})
            
            return Array.isArray(data) ? data : [data] 
        } catch (error) {
            throw error
        }
    }
}

export default new MovieService()