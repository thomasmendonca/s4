import styles from '../header/Header.module.css'
import Logo from '../../../assets/logo.svg'
import Image from 'next/image'

export default function Header (){
    return(
        <div className={styles.headerLayout}>
            <Image className={styles.headerLogo} src={Logo} alt="logo" />
        </div>
    )
}