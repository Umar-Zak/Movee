import {Flex, Text, TextField} from "@radix-ui/themes"
import {useFormikContext} from "formik"


interface AppTextFieldProps {
    label: string
    name: string
}

type FieldType = {
  [name: string]: string
}

const AppTextField = ({label, name}: AppTextFieldProps) => {
     const {errors, setFieldValue , touched, values} = useFormikContext<FieldType>()
    return ( 
       <Flex direction="column">
       <Flex direction="row" gap="2" align="center">
        <Text 
        className="lightText"
        weight="medium"
        highContrast
        >
          {label}
        </Text>
        <TextField.Input  
            variant="soft" 
            color="teal"
            className="lightText"
            value={values[name]}
            onChange={({target: {value}}) => setFieldValue(name, value)}
         />
       </Flex>
      {touched[name] && errors[name] && <Text className="error" >{errors[name]}</Text>}
       </Flex>
     );
}
 
export default AppTextField;