import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'
import styled from 'styled-components'

const Title = styled.div `
color : ${({theme})=> theme.titleColor};
`


export default function NotFound() {
    useEffect(() => {
        setTimeout(() =>  {
            window.location.href = '/'
        }, 4000)
    },[])

    return (
        <div>
        <Title>
            <h1 className={styles.title}>Ooops! <br/> <code>404</code> ...page not found<br/><br/><FontAwesomeIcon icon={faExclamationTriangle} /> </h1>
            <p className={styles.description}>You will be redirected back to the homepage in 5secs. If you're not, click <a href="/">here</a></p>

        </Title>
        </div>
    )
}
