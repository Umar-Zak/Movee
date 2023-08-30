import {Select, Flex, Text} from "@radix-ui/themes"
import {useFormikContext} from "formik"


interface AppSelectProps {
    label: string
    name: string
}

type FieldType = {
    [name: string]: string
}

const AppSelectField = ({label, name}: AppSelectProps) => {
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
    <Select.Root
     size="2"
     onValueChange={value => setFieldValue(name, value)}
     value={values[name]}
    >
    <Select.Trigger   
    style={{width: 150}}
    className="lightText"  
    color="teal"   
    variant="soft" 
    placeholder="Select Plot" 
    />
    <Select.Content>
    <Select.Item value="full">Full</Select.Item>
    <Select.Item value="short">Short</Select.Item>
    </Select.Content>
    </Select.Root>
    </Flex>
   {touched[name] && errors[name] && <Text className="error">{errors[name]}</Text>}
    </Flex>
     );
}
 
export default AppSelectField;