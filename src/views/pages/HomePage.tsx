import {Heading, Text, Box} from "@radix-ui/themes"
import SearchForm from "../components/SearchForm"; 
import SearchResultHeader from "../components/SearchResultTable"; 
import {useAppSelector} from "../../CustomHook/cutom-redux-hooks";

const HomePage = () => {
    const showingLoader = useAppSelector(state => state.ui.showingLoader)
    return ( 
        <>
        {showingLoader &&
            <div className="loader-container">
             <div className="custom-loader"></div>
            </div>
            }
        <Box px="3">
        <Heading 
        className="lightText heading"
        align="center"
        as="h1"
        size="9"
        highContrast
        >
        We Are  Movee
        </Heading>
        <Text 
        className="lightText tagline"
        >
        Search your favorite movies. Just type in 
        the title, we handle the rest
        </Text>
       <SearchForm/>
        <SearchResultHeader/>
        </Box>
        </>
     );
}
 
export default HomePage;