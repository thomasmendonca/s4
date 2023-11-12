"use client"

import style from '../button/Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    link?: string
    onClick?: React.ReactEventHandler
    
  }
export default function Button({children,link,onClick,...rest}: ButtonProps){



    return(
        <button className={style.button} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}