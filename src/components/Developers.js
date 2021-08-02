import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
import {Col, Button, Card} from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import { GET_DEVS, ADD_UPVOTE} from '../graphQL/graphqueries';
import {useQuery, useMutation} from '@apollo/client';
import styled from 'styled-components';
import MySpinner from './MySpinner';



export const Developers = () => {
    //Query the backend DB
        const { loading, error, data } = useQuery(GET_DEVS);
        const [updateDev, setUpdated] = useMutation(ADD_UPVOTE);
        if (loading) return (<MySpinner />);
        if (error) return `Error! ${error.message}`;

    return(
      <>
            {data.devs.map ((dev) => (
                <CardWrapper className={styles.cardWrapper}>
                <Card.Body key={dev.id}>
                  <div className={styles.column} id={dev.id}>
                  <Col md={4}>
                  <img src={
                    dev.profile_pic === null ? '/img/no-image.svg' : dev.profile_pic.url
                  }   className={styles.columnImage}  alt={'profile pic'}/>
                  </Col>
                  <Col md={8} className="text-center">
                  <Card.Title className={styles.columnTitle}> <a href={'/dev/' + `${dev.id}`}> {dev.fullname} </a> {dev.upvotes > 300 ? <Verified /> : ''}</Card.Title>
                  <div className={styles.columnDescription} key={dev.stacks[0].id}>
                  <p> {dev.stacks[0].tech} </p>
                  </div>
                  <div>
                  {
                    dev.upvotes <= 55 ? <Star/>
                    : dev.upvotes >= 55 && dev.upvotes <= 105 ? (<><Star/><Star/></>)
                    : dev.upvotes >= 105 && dev.upvotes <= 155 ? (<><Star/><Star/><Star/></>)
                    : dev.upvotes >= 155 && dev.upvotes <= 205 ? (<><Star/><Star/><Star/><Star/></>)
                    : dev.upvotes >= 205 && dev.upvotes <= 300 ? (<><Star/><Star/><Star/><Star/><Star/></>)
                    : (<><Star/><Star/><Star/><Star/><Star/></>)
                  }
                  </div>
                  <div>
                  <Link href={'/dev/' + `${dev.id}`}>
                        <Button variant="outline-success" className={styles.dmBtn}> Hire me for a Gig</Button>
                  </Link>
                  </div>
                  </Col>
                  </div>
                  <Card.Text className={styles.columnText}>
                    {dev.description.slice(0,150)+'...'} <a href={'/dev/' + `${dev.id}`}> <FontAwesomeIcon icon={faInfoCircle} /></a>
                  </Card.Text>
                  <Card.Text className={styles.columnIconText}>
                      <span className={styles.iconLeft}>
                      <a href="" onClick={e => {e.preventDefault();  updateDev({variables: {id:dev.id, like:++dev.upvotes}})}}> <small>{dev.upvotes} Upvotes  <FontAwesomeIcon className={styles.columnIcon} icon={faHeart} /></small></a>
                      </span>
                      <span className={styles.iconRight}>
                      <a href={dev.reddit_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faRedditAlien} /></small></a>
                      <a href={dev.github_url} target="blank">   <small><FontAwesomeIcon className={styles.columnIconX} icon={faGithub} /></small> </a>
                      <a href={dev.dev_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faDev} /></small> </a>
                      <a href={dev.stack_overflow_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStackOverflow} /></small></a>
                      <a href={dev.slack_channel} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faSlack} /></small> </a>
                      </span>
                  </Card.Text>
                </Card.Body>
              </CardWrapper>
            ))}
      </>
    )
  }


  //using custom modules
export function Star() {
    return (
        <>
        <small><FontAwesomeIcon className={styles.columnIconStar} icon={["fas", "star"]} /></small>
        </>
    )
  }

  export const Verified = () => {
    return ( <img src='/img/verified.svg' className={styles.verified} alt={'verified'} /> );
  }

  const CardWrapper = styled.div`
  background: ${({ theme }) => theme.bodyBackground};
  border-top: 10px solid ${({ theme }) => theme.borderTop};
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
  min-height: 300px;
  `;