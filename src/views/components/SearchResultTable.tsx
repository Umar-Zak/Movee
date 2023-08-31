import {Table, Text} from "@radix-ui/themes"
import MovieComponent from "./MovieComponent";
import { useAppSelector } from "../../CustomHook/cutom-redux-hooks";

const SearchResultHeader = () => {
    const movies = useAppSelector(state => state.movies.searchResults)
    return ( 
        <div className="table-container">
        <Table.Root 
        variant="surface"
        className="custom-table"
        >
        <Table.Header
        
        >
            <Table.Row  className="custom-table__header_row">
            <Table.ColumnHeaderCell >Title</Table.ColumnHeaderCell>
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
       {(movies.length === 0) && <Text className="no-search-result">No search results</Text>}
        </div>
     );
}
 
export default SearchResultHeader;