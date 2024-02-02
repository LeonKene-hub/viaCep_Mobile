import { InputField } from "./style"


export const Input = ({
    placeholder, 
    editable, 
    KeyType, 
    fieldValue, 
    onChangeText, 
    maxLenght
}) => {
    return(
        <InputField
            placeholder={placeholder}
            editable={editable}
            KeyType={KeyType}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            maxLenght={maxLenght}
        />
    )
}