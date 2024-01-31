import styled from "styled-components";

//HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text
export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    flex: 0.3;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 15px 15px;

    box-shadow: 0px 0px 10px red;
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 35px;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: "Roboto_500Medium";
    color: #333E33;
`