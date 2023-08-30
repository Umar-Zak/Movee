import {Formik} from "formik"
import {Flex} from "@radix-ui/themes"
import * as Yup from "yup"
import AppTextField from "./AppTextField";
import AppSelectField from "./AppSelectField";
import FormSubmitButton from "./FormSubmitButton";


const formValidationSchema = Yup.object().shape({
    title: Yup.string().required().label("Movie title"),
    year: Yup.string().matches(/[0-9]{4}/, "Movie must be a valid year").label("Movie year"),
    plot: Yup.string().label("Movie plot format")
})

const SearchForm = () => {
    return (  
        <Formik
         initialValues={{
            title: "",
            year: "",
            plot: ""
         }}
         onSubmit={formFields => console.log(formFields)}
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