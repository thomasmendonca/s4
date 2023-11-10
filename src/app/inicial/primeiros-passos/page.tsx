"use client"
import Header from "@/app/components/header/Header";
import RootLayout from "@/app/layout";
import style from '../inicial.module.css'
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/button/Button";
export default function FirstSteps(){
    const router = useRouter();
    return(
        <RootLayout>
            <Header/>
            <div className={style.container}>
            <h1 className={style.title}>Vamos iniciar!</h1>
                <h2 className={style.subtitle}> Primeiros passos</h2>
                <article className={style.article}>
                    <p>
                    Para registrar o seu veículo, é possível acessar a página designada para o <strong>cadastro do veículo</strong>, onde você terá a oportunidade de inserir todas as informações pertinentes e detalhadas sobre o seu automóvel.
                    </p>
                </article>
                <div className={style.buttonWrapper}>
                <Button
                onClick={() => router.push('/inicial')}>
                    Voltar
                </Button>
                <Button
                onClick={() => router.push('/inicial/tudo-pronto')}>
                    Próximo
                </Button>
                </div>
            </div>
        </RootLayout>
    )
}