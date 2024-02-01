import styled from "styled-components";

//BoxInput - View
//TitleInput - Text
//Input - TextInput
export const BoxContainer = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    flex: 0.2;
    margin-bottom: 20px;
    //width: 100% ;

`
export const BoxLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-width: 1px;
`

// export const TitleInput = styled.Text`
//     color: #047CD3;
//     //font-family: Roboto_700Bold;
// `

// export const Input = styled.TextInput`
//     border-width: 1px;
//     flex: 0.8;
//     padding-left: 15px;
//     border-radius: 10px;
// `