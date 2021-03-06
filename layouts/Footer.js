import {Navbar, Container} from 'react-bootstrap'
import styles from '../styles/Layout.module.css'


export default function Footer() {
    return (
<div className={styles.footer} id='footer'>
    <div className={styles.textCenter}>
      <p>Copyright &copy; 2021. All rights reserved</p>
      <span className={styles.spanSmall}><small>Proudly Nigerian</small><img src="/img/nigeria.svg" width="16px" height="16px" /></span>
      </div>


</div>
    )
}
