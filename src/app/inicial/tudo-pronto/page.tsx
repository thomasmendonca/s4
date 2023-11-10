"use client"
import Header from "@/app/components/header/Header";
import RootLayout from "@/app/layout";
import style from '../inicial.module.css';
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/button/Button";

export default function Already(){
    const router = useRouter()
    return(
        <RootLayout>
            <Header/>
            <div className={style.container}>
            <h1 className={style.title}>Vamos iniciar!</h1>
                <h2 className={style.subtitle}> Tudo pronto</h2>
                <article className={style.article}>
                    <p>
                    Além disso, oferecemos um <strong>chat</strong> para um atendimento personalizado e ágil. Estamos aqui para ajudar!
                    </p>
                </article>
                <div className={style.buttonWrapper}>
                <Button
                onClick={() => router.push('/inicial/primeiros-passos')}>
                    Voltar
                </Button>
                <Button
                onClick={() => router.push('/')}>
                    Pronto
                </Button>
                </div>
            </div>
        </RootLayout>
    )
}