import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { BoxLine } from "../../components/BoxInput/style";
import { ScrollForm, ContainerForm } from "./style";
import axios from "axios";


export function Home() {

    //hooks - effect
    //hooks - state
    const [cep, setCep] = useState("")
    const [Logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    //chamada API
    const APIget = async () => {
        try {
            if (cep != "" && cep.length === 8) {
                const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

                if (endereco.error) {
                    alert("Ërro na API")
                }

                setLogradouro(endereco.logradouro)
                setBairro(endereco.bairro)
                setCidade(endereco.localidade)
                setEstado(endereco.estado)
                setUf(endereco.uf)
            }
        } catch (error) {
            alert('Deu ruim')
        }
    }

    useEffect(() => {
        APIget()
    }), [];

    return (


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
                    editable={true}
                    fieldValue={cep}
                    onChangeText={(newValue) => {
                        setCep(newValue)
                    }}
                />
                <BoxInput
                    textLabel={`Logradouro`}
                    placeholder={`Logradouro...`}
                    editable={true}
                    fieldValue={Logradouro}
                />
                <BoxInput
                    textLabel={`Bairro`}
                    placeholder={`Bairro...`}
                    editable={true}
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel={`Cidade`}
                    placeholder={`Cidade...`}
                    editable={true}
                    fieldValue={cidade}
                />

                {/* linha com dois inputs */}

                <BoxLine>
                    <BoxInput
                        textLabel={`Estado`}
                        placeholder={`Estado...`}
                        editable={true}
                        fieldWidth={60}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel={`UF`}
                        placeholder={`UF`}
                        editable={true}
                        fieldWidth={30}
                        fieldValue={uf}
                    />
                </BoxLine>
            </ContainerForm>

        </ScrollForm>
    )
}