import { Movie, SearchQuery } from "../Service/DTOs";
import Https from "./Https";


class MovieService extends Https {
    searchForMovie = async(queryParams: SearchQuery): Promise<[Movie]> => {
        let url = `t=${queryParams.title}&y=${queryParams.year}&plot=${queryParams.plot}`
        try {
            const {data}= await this.get<Movie>(url)
            return [data]
        } catch (error) {
            throw error
        }
    }
}

export default new MovieService()