import { BoxInput } from "../../components/BoxInput";
import { BoxContainer, BoxLine } from "../../components/BoxInput/style";
import { ScrollForm, ContainerForm } from "./style";

export function Home() {
    return (
        //hooks - state

        //hooks - effect
        //chamada API

        //ScrollForm - ScrollView
        //ContainerForm - View
        //BoxInput - View
        //Label - Text
        //Input - TextInput

        <ScrollForm>
            <ContainerForm>
                {/* 4 linhas de inputs */}
                <BoxInput
                    textLabel={`Informe o seu CEP:`}
                    placeholder={`CEP...`}
                />
                <BoxInput
                    textLabel={`Logradouro`}
                    placeholder={`Logradouro...`}
                />
                <BoxInput
                    textLabel={`Bairro`}
                    placeholder={`Bairro...`}
                />
                <BoxInput
                    textLabel={`Cidade`}
                    placeholder={`Cidade...`}
                />

                {/* linha com dois inputs */}

                <BoxLine>
                    <BoxInput
                        textLabel={`Bairro`}
                        placeholder={`Bairro...`}
                        fieldWidth={'60'}
                    />
                    <BoxInput
                        textLabel={`Cidade`}
                        placeholder={`Cidade...`}
                        fieldWidth={'30'}
                    />
                </BoxLine>
            </ContainerForm>

        </ScrollForm>
    )
}