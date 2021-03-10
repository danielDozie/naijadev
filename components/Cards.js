import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {Col, Button, Card } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';



const CardWrapper = styled.div`
background: ${({ theme }) => theme.background};
border-top: 12px solid ${({ theme }) => theme.borderTop};
color: ${({ theme }) => theme.text};
position: ${({ theme }) => theme.position};
display: ${({ theme }) => theme.display};
flex-direction: ${({ theme }) => theme.flexDirection};
min-width: ${({ theme }) => theme.minWidth};
word-wrap: ${({ theme }) => theme.wordWrap};
background-color: ${({ theme }) => theme.backgroundColor};
background-clip: ${({ theme }) => theme.backgroundClip};
border-radius: ${({ theme }) => theme.borderRadius};
margin-bottom: ${({ theme}) => theme.marginBottom};
}`;


export async function getStaticProps() {
  const query = await axios
  .get('http://localhost:1337/devs')
  .then(response => response.data)
  return {
    props : {
      devs : query,
    }
  }
}

export default function Cards( {devs} ) {
    return (
      <ul>
        {devs.map (dev => (
          <li>{dev.name}</li>
        ))}
      </ul>
      
    // <>
    //   { results.map ( data => (
    //     <CardWrapper key={data._id}>
    //     <Card.Body>
    //       <div className={styles.column}>
    //       <Col md={4}>
    //         <img src="/img/168732.png" className={styles.columnImage}  />
    //       </Col>
    //       <Col md={8} className="text-center">
    //       <Card.Title className={styles.columnTitle}>{data.name}</Card.Title>
    //       <div className={styles.columnDescription}>
    //       <p>LARAVEL / REACTJS / SASS</p>
    //       </div>
    //       <div>
    //       <small> <FontAwesomeIcon className={styles.columnIconX} id='star' icon={faStar} /></small>
    //       <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
    //       <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
    //       <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
    //       <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStar} /></small>
    //       </div>
    //       <div>
    //       <Button variant="outline-success" className={styles.dmBtn}>Send me a DM</Button>
    //       </div>
    //       </Col>
    
    //       </div>
    //       <Card.Text className={styles.columnText}>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This card has even longer content than the first to
    //         show that equal height action.
    //       </Card.Text>
    //       <Card.Text className={styles.columnIconText}>
    //           <span className={styles.iconLeft}>
    //             <small>Upvote <FontAwesomeIcon className={styles.columnIcon} icon={faHeart} /></small>
    //           </span>
    //           <span className={styles.iconRight}>
    //             <small> <FontAwesomeIcon className={styles.columnIconX} icon={faRedditAlien} /></small>
    //             <small><FontAwesomeIcon className={styles.columnIconX} icon={faGithub} /></small>
    //             <small> <FontAwesomeIcon className={styles.columnIconX} icon={faDev} /></small>
    //             <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStackOverflow} /></small>
    //             <small> <FontAwesomeIcon className={styles.columnIconX} icon={faSlack} /></small>
    //           </span>
    //       </Card.Text>
    //     </Card.Body>
    //   </CardWrapper>
    //   ))}
    //   </>
    );
}





