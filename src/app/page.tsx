"use client"
import Link from "next/link"
import Header from "./components/header/Header"
import RootLayout from "./layout"
import { useRouter } from "next/navigation";
import { Button } from "./components/button/Button";
import style from "./page.module.css"
import { useState } from "react";

export default function Home() {
  const router = useRouter()

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSetEmail = ()=>{
  }
  const handleSetPassword = ()=>{

  }
  return (
    <RootLayout>
      <Header />
     
      <div className={style.container}>
        {/* <FormLogin/> */}
        <div className={style.formContainer} >
          <form className={style.formLayout}>
            <h1 className={style.formTitle}>Entrar</h1>
            <p className={style.formText}>Preencha seus dados para efetuar o login</p>
            <div className={style.formInputGroup}>
              <input 
              className={style.formInput} 
              type="text" 
              placeholder="E-mail" />
              <input 
              className={style.formInput} 
              type="password" 
              placeholder="Senha" />
            </div>
            <Link className={style.formLink} href="#">Esqueceu a senha?</Link>
          </form>
          <Button onClick={() => router.push('/inicial')}>Entrar</Button>
        </div>
      </div>
    </RootLayout>
  )
}
