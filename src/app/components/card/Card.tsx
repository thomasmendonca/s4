import styled from "./Card.module.css"

export default function Card() {
    return (
      <>
        <h1 className={styled.cardTitle}> Título </h1>
        <p className={styled.cardImage}> Imagem </p>
        <p className={styled.cardContent}> Conteúdo </p>
      </>
    );
}