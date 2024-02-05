import styled from "styled-components/native";

//BoxInput - View
//TitleInput - Text
//Input - TextInput
export const BoxContainer = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    margin-bottom: 20px;
`
export const BoxLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`