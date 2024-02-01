import { Label } from "../Label";
import { BoxContainer} from "./style";
import { Input } from "../Input";

export const BoxInput = ({
    textLabel,
    fieldWidth =100,
    placeholder,
    editable = false,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght

}) => {
    return (
        //BoxInput - View
        //TitleInput - Text
        //Input - TextInput
        <BoxContainer fieldWidth={fieldWidth}>
            {/* <TitleInput>{title}</TitleInput> */}

            {/* Label */}
            <Label textLabel={textLabel}/>

            {/* Input */}
            <Input 
                placeholder={placeholder} 
                editable={editable}
                KeyType={KeyType}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                maxLenght={maxLenght}
            />
        </BoxContainer>
    )
}