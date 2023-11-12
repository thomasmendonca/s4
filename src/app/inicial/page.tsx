"use client"
import  Button  from "../components/button/Button";
import Header from "../components/header/Header";
import RootLayout from "../layout";
import style from "./inicial.module.css"
import { useRouter } from "next/navigation";
export default function Inicial (){
    const router = useRouter()
    return(
        <RootLayout>
            <Header/>
            <div className={style.container}>
                <h1 className={style.title}>Bem Vindo à DevSolutions</h1>
                <h2 className={style.subtitle}> Aqui buscamos a melhor solução para o seu atendimento!</h2>
                <article className={style.article}>
                    <p>Nós facilitamos o seu processo de atendimento, escolhendo o melhor modal para o seu veículo!</p>
                </article>
                <div className={style.buttonWrapper}>
                <Button
                onClick={() => router.push('/inicial/primeiros-passos')}>
                    Começar
                </Button>
                </div>
            </div>
        </RootLayout>


    )
}