import {Table} from '@radix-ui/themes'
import { Movie } from '../../Service/DTOs';

const MovieComponent = (movie: Movie) => {
    return ( 
        <Table.Row>
            <Table.RowHeaderCell>{movie.Title}</Table.RowHeaderCell>
            <Table.Cell>{movie.Genre}</Table.Cell>
            <Table.Cell>{movie.Language}</Table.Cell>
            <Table.Cell>{movie.Runtime}</Table.Cell>
            <Table.Cell>{movie.Released}</Table.Cell>
        </Table.Row> 
     );
}
 
export default MovieComponent;