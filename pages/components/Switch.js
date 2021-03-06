import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import {func, string} from 'prop-types'



export default function Switch({theme, toggleTheme}) {
    const [active, setActive] = useState(false);

    const Toggle = () => {
        setActive(!active);

        return (
            <Button
              background={`${({theme})=>theme.background}`} variant="outline-success"  size="sm" className={`${styles.switchBtn} ${active ? styles.switchBtn : styles.altswitchBtn}`}
              onClick={toggleTheme}
            ><FontAwesomeIcon className={styles.columnIcon} icon={faLightbulb} />
            </Button>
          );
      }

      Toggle.propTypes = {
          theme: string.isRequired,
          toggleTheme: func.isRequired

      }

      return (
            <Button
              background={`${({theme})=>theme.background}`} variant="outline-success"  size="sm" className={`${styles.switchBtn} ${active ? styles.switchBtn : styles.altswitchBtn}`}
              onClick={toggleTheme}
            ><FontAwesomeIcon className={styles.columnIcon} icon={faLightbulb} />
            </Button>
          );

    
}

