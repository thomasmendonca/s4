"use client"
import { useRouter } from "next/navigation";
import { Button } from "../components/button/Button";
import Header from "../components/header/Header";
import RootLayout from "../layout";
import style from './MenuHome.module.css'
export default function MenuHome() {
    const router = useRouter()

    const cards = [
        {
            id: 1,
            title: 'Ver perfil',
            description: 'Clique para ver as informações do seu perfil.',
            button:'Perfil',
            navigator: '/perfil-usuario'
        },
        {
            id: 2,
            title: 'Cadastrar Veículo',
            description: 'Para cadastrar um novo veículo, basta clicar no botão abaixo.',
            button:'Cadastrar',
            navigator: '/cadastro-veiculo'
        },
        {
            id: 3,
            title: 'Acionar Sinistro',
            description:'Ocorreu algum acidente? Acione o sinistro para que possamos te ajudar.',
            button:'Acionar',
            navigator: '/acionar-sinistro'
        },
        
    ]
    return (
        <RootLayout>
            <Header />
            <div className={style.container}>
                <h1 className={style.title}>Bem vindo, Fulano!</h1>
                <div className={style.cardGroup}>
                {cards.map((card) => (
                    <div key={card.id} className={style.card}>
                        <h2 className={style.cardTitle}>{card.title}</h2>
                        <article className={style.article}>
                            <p>{card.description}</p>
                        </article>
                        <Button onClick={() => router.push(card.navigator)}>{card.button}</Button>
                    </div>
                ))}
                </div>
            </div>
        </RootLayout>
    )
}