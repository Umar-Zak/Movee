import {Button} from "@radix-ui/themes"
import {useFormikContext} from "formik"

interface SubmitButtonProps {
    text: string
}

const FormSubmitButton = ({text}: SubmitButtonProps) => {
    const {submitForm} = useFormikContext()
    return (
        <Button onClick={submitForm} style={{cursor: "pointer"}}>{text}</Button>
     );
}
 
export default FormSubmitButton;