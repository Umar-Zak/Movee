import {Table} from "@radix-ui/themes"
import MovieComponent from "./MovieComponent";
import { useAppSelector } from "../../CustomHook/cutom-redux-hooks";

const SearchResultHeader = () => {
    const movies = useAppSelector(state => state.movies.searchResults)
    return ( 
        <div className="table-container">
        <Table.Root 
        variant="surface"
        >
        <Table.Header
        
        >
            <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Genre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Language</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Runtime</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Released</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Writer(s)</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Rated</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                movies.map((movie, index) => (
                <MovieComponent key={index} {...movie}/>
                ))
            }
        </Table.Body>
        </Table.Root>
        </div>
     );
}
 
export default SearchResultHeader;