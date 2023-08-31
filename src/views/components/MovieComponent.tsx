import {Table} from '@radix-ui/themes'
import { Movie } from '../../Service/DTOs';

const MovieComponent = (movie: Movie) => {
    return ( 
        <Table.Row className="custom-table__body_row">
            <Table.RowHeaderCell>{movie.Title}</Table.RowHeaderCell>
            <Table.Cell>{movie.Genre}</Table.Cell>
            <Table.Cell>{movie.Language}</Table.Cell>
            <Table.Cell>{movie.Runtime}</Table.Cell>
            <Table.Cell>{movie.Released}</Table.Cell>
            <Table.Cell>{movie.Writer}</Table.Cell>
            <Table.Cell>{movie.Rated}</Table.Cell>
        </Table.Row> 
     );
}
 
export default MovieComponent;