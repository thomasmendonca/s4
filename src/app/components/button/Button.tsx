"use client"

import style from '../button/Button.module.css'


export const Button = ({children, onClick})=>{
    return(
        <button className={style.button}onClick={onClick}>{children}</button>
    )
}