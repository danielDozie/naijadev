import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faDev, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Card, Col, Button } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'



export default function Cards() {
    return (
        <Card className={styles.cardTop}>
        <Card.Body>
          <div className={styles.column}>
          <Col md={4}>
            <img src="/img/mwdbqe39mp3rgba07.rx800.26dbd8b5-2.jpg" className={styles.columnImage}  />
          </Col>
          <Col md={8} className="text-center">
          <Card.Title className={styles.columnTitle}>Daniel Dozie</Card.Title>
          <div className={styles.columnDescription}>
          <p>LARAVEL / REACTJS / SASS</p>
          </div>
          <div>
          <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
          <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
          <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
          <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
          <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
          </div>
          <div>
          <Button variant="outline-success" className={styles.dmBtn}>Send me a DM</Button>
          </div>
          </Col>
    
          </div>
          <Card.Text className={styles.columnText}>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
          <Card.Text className={styles.columnIconText}>
              <span className={styles.iconLeft}>
                <small>Upvote <FontAwesomeIcon className={styles.columnIcon} icon={faHeart} /></small>
              </span>
              <span className={styles.iconRight}>
                <small> <FontAwesomeIcon className={styles.columnIconX} icon={faRedditAlien} /></small>
                <small><FontAwesomeIcon className={styles.columnIconX} icon={faGithub} /></small>
                <small> <FontAwesomeIcon className={styles.columnIconX} icon={faDev} /></small>
                <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStackOverflow} /></small>
                <small> <FontAwesomeIcon className={styles.columnIconX} icon={faSlack} /></small>
              </span>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
