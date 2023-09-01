import {Formik} from "formik"
import {Flex} from "@radix-ui/themes"
import { AnyAction } from "redux";
import * as Yup from "yup"
import AppTextField from "./AppTextField";
import AppSelectField from "./AppSelectField";
import FormSubmitButton from "./FormSubmitButton";
import { SearchQuery } from "../../Service/DTOs";
import { useAppDispatch } from "../../CustomHook/cutom-redux-hooks";
import { loadMovieSearchResults } from "../../Repository/store";


const formValidationSchema = Yup.object().shape({
    title: Yup.string().required().label("Movie title"),
    year: Yup.string().matches(/[0-9]{4}/, "Movie year must be a valid year").label("Movie year"),
    plot: Yup.string().label("Movie plot format")
})

const SearchForm = () => {
    const dispatch = useAppDispatch()

    const handleSubmitForm = (formFields: SearchQuery) => {
        dispatch(loadMovieSearchResults(formFields) as unknown as AnyAction)
    }

    return (  
        <Formik
         initialValues={{
            title: "",
            year: "",
            plot: ""
         }}
         onSubmit={(formFields: SearchQuery) => handleSubmitForm(formFields)}
         validationSchema={formValidationSchema}
        >
          {({}) => (
            <Flex 
            direction="row"
            justify="center"
            gap="5"
            wrap="wrap"
            >
            <AppTextField name="title" label="Title" />
            <AppTextField name="year" label="Year" />
            <AppSelectField name="plot" label="Plot"/>
            <FormSubmitButton text="Search" />
            </Flex>
          )}
        </Formik>
    );
}
 
export default SearchForm;