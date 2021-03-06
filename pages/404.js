import { faAmericanSignLanguageInterpreting, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

export default function NotFound() {
    return (
        <div>
            <h1 className={styles.title}>Ooops! <br/> <code>404</code> Page not found<br/><br/><FontAwesomeIcon icon={faExclamationTriangle} /> </h1>
            <p className={styles.description}>You will be redirected back to the homepage in 5secs. If you're not, click <a href="/">here</a></p>
        </div>
    )
}
