"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import RootLayout from '../layout';
import style from '../page.module.css';

export default function PerfilUsuario() {
  const [userData, setUserData] = useState('');

  const getUserData = async () => {
    const user = {
      nome_segurado: 'kaue',
      cpf_cnpj: '',
      email_segurado: '',
    };

    try {
      const queryParams = new URLSearchParams(user).toString();
      const response = await fetch(`http://localhost:8080/segurado?${queryParams}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      alert('Erro ao carregar usuário');
    }
  };

  useEffect(() => {
    getUserData();
  }, []); // Executa a função ao montar o componente

  return (
    <RootLayout>
      <Header />
      <div className={style.container}>
        {userData && (
          <div>
            <h2>Detalhes do Usuário</h2>
            {Object.entries(userData).map(([key, value]) => (
              <p key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</p>
            ))}
          </div>
        )}
      </div>
    </RootLayout>
  );
}
