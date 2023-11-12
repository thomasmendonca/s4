"use client"
import Link from "next/link"
import Header from "../components/header/Header"
import RootLayout from "../layout"
import style from "../page.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../components/button/Button"

export default function Cadastro() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(event.target.value);
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    
    

    const toCadastro = async (userPayload: { nome_segurado: string; cpf_cnpj: string; email_segurado: string }) => {
        try {
            const response = await fetch("http://localhost:8080/segurado", {
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
    const setCadastro = (event: { preventDefault: () => void })=>{
        event?.preventDefault()
        const payload = {
            nome_segurado: name,
            cpf_cnpj: cpf,
            email_segurado: email,
        }
        const payloadJSON = JSON.stringify(payload)
        toCadastro(payload)

        sessionStorage.setItem("token", payloadJSON)

        router.push('/inicial')
    }

    return (
        <RootLayout>
            <Header />
            <div className={style.container}>
                <div className={style.formContainer}>
                    <h1 className={style.formTitle}>Criar conta</h1>
                    <p className={style.formText}>Preencha seus dados para criar sua conta</p>
                    <form className={style.formLayout}>
                        <div className={style.formInputGroup}>
                            <input
                                className={style.formInput}
                                type="text"
                                placeholder="Nome completo"
                                onChange={handleName}
                                value={name}
                            />
                            <input
                                className={style.formInput}
                                type="text"
                                placeholder="CPF"
                                onChange={handleCpf}
                                value={cpf}
                            />
                            <input
                                className={style.formInput}
                                type="email"
                                placeholder="E-mail"
                                onChange={handleEmail}
                                value={email}
                            />
                        </div>
                    </form>
                    <Button
                        onClick={setCadastro}
                    >
                        Cadastrar
                    </Button>
                </div>
            </div>


        </RootLayout>
    )
}