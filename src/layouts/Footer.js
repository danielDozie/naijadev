import styles from '../styles/Layout.module.css'
import styled from 'styled-components'


const Footertext = styled.div` 
    color: ${({theme}) => theme.footerText};
`

export default function Footer() {
    return (
        
            <div className={styles.footer}>
                <div className={styles.textCenter}>
                <Footertext>
                <p>Copyright &copy; 2021. All rights reserved</p>
                <span className={styles.spanSmall}><small>Proudly Nigerian</small><img src="/img/nigeria.svg" width="16px" height="16px" /></span>
                </Footertext>
                </div>
            </div>
    )
}
