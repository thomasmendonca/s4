"use client"
import Header from "../components/header/Header";
import RootLayout from "../layout";
import { useEffect, useState } from "react";
import style from '../page.module.css'
import { useRouter } from "next/navigation"
import Button from "../components/button/Button";
export default function CadastroVeiculo() {
    const router = useRouter()
    const [modeloVeiculo, setModeloVeiculo] = useState('');
    const [alturaVeiculo, setAlturaVeiculo] = useState('');
    const [larguraVeiculo, setLarguraVeiculo] = useState('');
    const [comprimentoVeiculo, setComprimentoVeiculo] = useState('');
    const [pesoVeiculo, setPesoVeiculo] = useState('');
    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [capacidadeCombustivel, setCapacidadeCombustivel] = useState('');

    const handleModeloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModeloVeiculo(event.target.value);
    };

    const handleAlturaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlturaVeiculo(event.target.value);
    };

    const handleLarguraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLarguraVeiculo(event.target.value);
    };

    const handleComprimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComprimentoVeiculo(event.target.value);
    };

    const handlePesoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesoVeiculo(event.target.value);
    };

    const handlePlacaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlacaVeiculo(event.target.value);
    };

    const handleCapacidadeCombustivelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCapacidadeCombustivel(event.target.value);
    };
    const toCadastro = async (userPayload: { modelo_veiculo: string; altura_veiculo_cm: string; largura_veiculo_cm: string; comprimento_veiculo_cm: string; peso_kg: string; placa_veiculo: string; capacidade_combustivel: string; }) => {
        try {
            const response = await fetch("http://localhost:8080/veiculo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userPayload),
            });

            if (!response.ok) {
                // Se a resposta não estiver OK (por exemplo, status 404 ou 500), lança um erro
                throw new Error(`Erro ao enviar dados. Status: ${response.status}`)
            }

            // Se a resposta estiver OK, você pode continuar o que precisa ser feito com a resposta
            const data = await response.json()
            console.log(data); // ou faça algo com os dados

        } catch (error) {
            // Captura erros durante a execução do código acima
            console.error("Erro durante a solicitação:", error)
            // Você pode lançar um novo erro, alertar, registrar ou manipular o erro de outra forma conforme necessário
            alert("Ocorreu um erro durante a solicitação. Verifique o console para mais detalhes.")
        }
    }
    const setCadastroVeiculo = (event: { preventDefault: () => void; }) => {
        event?.preventDefault()
        const payload = {
            modelo_veiculo: modeloVeiculo,
            altura_veiculo_cm: alturaVeiculo,
            largura_veiculo_cm: larguraVeiculo,
            comprimento_veiculo_cm: comprimentoVeiculo,
            peso_kg: pesoVeiculo,
            placa_veiculo: placaVeiculo,
            capacidade_combustivel: capacidadeCombustivel
        }
        toCadastro(payload)
        const payloadJSON = JSON.stringify(payload)
        toCadastro(payload)

        sessionStorage.setItem("token", payloadJSON)

        router.push('/menu-home')
    }

    return (
        <RootLayout>
            <Header />
            <div className={style.container}>
                <div className={style.formContainer}>
                    <h1 className={style.formTitle}>Cadastro de Veículo</h1>
                    <p className={style.formText}>Digite as informações abaixo para cadastrar o veículo</p>
                    <form className={style.formLayout}>
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Modelo do veículo"
                            onChange={handleModeloChange}
                            value={modeloVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Altura do veículo"
                            onChange={handleAlturaChange}
                            value={alturaVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Largura do veículo"
                            onChange={handleLarguraChange}
                            value={larguraVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Comprimento do veículo"
                            onChange={handleComprimentoChange}
                            value={comprimentoVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Peso do veículo"
                            onChange={handlePesoChange}
                            value={pesoVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Placa do veículo"
                            onChange={handlePlacaChange}
                            value={placaVeiculo}
                        />
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Capacidade de combustível"
                            onChange={handleCapacidadeCombustivelChange}
                            value={capacidadeCombustivel}
                        />
                    </form>
                    <div className={style.buttonWrapper}>
                        <Button
                            onClick={() => router.push('/menu-home')}
                        >
                            Voltar
                        </Button>
                        <Button
                            onClick={setCadastroVeiculo}
                        >
                            Cadastrar
                        </Button>
                    </div>
                </div>

            </div>
        </RootLayout>
    )
}