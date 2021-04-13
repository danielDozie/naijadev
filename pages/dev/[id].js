import Head from 'next/head'
import getDevsApi from '../api/devsApi'
import {Container, Jumbotron, Card, Col, Button} from 'react-bootstrap'
import styled from 'styled-components';
import layoutStyle from '../../styles/Layout.module.css'
import homeStyle from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faChevronCircleLeft, faHeart, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
//import Star from '../../pages/index'
const title = process.env.SiteTitle;

export function Star() {
    return (
        <>
        <small><FontAwesomeIcon className={homeStyle.columnIconStar} icon={["fas", "star"]} /></small>
        </>
    )
  }

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Devs(props) {
    return (<>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{props.name} - {title}</title>
    </Head>
    <Container fluid>
        <div className={layoutStyle.myCard} >
            <CardWrapper>
            <Back />
                <div className="mx-auto">
                    <br />
                    <Text>
                        <h3 className={homeStyle.title}>{props.name} <span>{props.upvotes > 100 ? <Verified /> : ''}</span></h3>
                        
                      <p className="text-center">  {
                  props.upvotes <= 10 ? <Star/> 
                  : props.upvotes >= 15 && props.upvotes <= 25 ? (<><Star/><Star/></>) 
                  : props.upvotes >= 25 && props.upvotes <= 35 ? (<><Star/><Star/><Star/></>) 
                  : props.upvotes >= 35 && props.upvotes <= 45 ? (<><Star/><Star/><Star/><Star/></>) 
                  : props.upvotes >= 45 && props.upvotes <= 50 ? (<><Star/><Star/><Star/><Star/><Star/></>) 
                  : (<><Star/><Star/><Star/><Star/><Star/></>)
                }</p>
                    </Text>
                    <Text className="text-center">
                    <p className={homeStyle.columnTitle}> {props.stacks[0].tech} </p>
                    </Text>
                </div>
                <div className="row mt-3 p-4"> 
                    <div class="col-md-4">
                    <img src={
                   props.profile_pic === null ? '/img/no-image.svg' : props.profile_pic.url
                }   className={homeStyle.singleImage}  />
                        
                    </div>          
                    <div class="col-md-8">    
                        <Text>
                            <span>
                            <b>Fullname: </b><p>{props.name}</p>
                            </span>
                            <span>
                               <b>About me:</b>  <p>{props.description}</p>
                            </span>
                            <span>
                               <b>Upvotes/Likes:</b>  <p>{props.upvotes} amazing people vetted for me.</p>
                            </span>
                            <div >
                            <Button variant="outline-success" className={homeStyle.dmBtn}>Hire me for a Gig</Button>
                            <span className="ml-1"></span>
                            <Button variant="danger" className={homeStyle.dmBtn}>Report me</Button>
                            </div>
                        </Text>    
                        <p></p>
                    </div>
                </div>
                <div className="border-bottom">
                    {/* <hr /> */}
                </div>
                <div>
                <Text className={homeStyle.singleIconText}>
                <p><b>I am social:</b> </p>
                    <span className="text-center">
                    <a href={props.reddit_url} target="blank">  <small> <FontAwesomeIcon className={homeStyle.columnIconX} icon={faRedditAlien} /></small></a>
                    <a href={props.github_url} target="blank">   <small><FontAwesomeIcon className={homeStyle.columnIconX} icon={faGithub} /></small> </a>
                    <a href={props.dev_url} target="blank">  <small> <FontAwesomeIcon className={homeStyle.columnIconX} icon={faDev} /></small> </a>
                    <a href={props.stack_overflow_url} target="blank">  <small> <FontAwesomeIcon className={homeStyle.columnIconX} icon={faStackOverflow} /></small></a>
                    <a href={props.slack_channel} target="blank">  <small> <FontAwesomeIcon className={homeStyle.columnIconX} icon={faSlack} /></small> </a>
                    </span>
                </Text>
                </div>
            </CardWrapper>
        </div>
    </Container>
        
   </> )
}


export async function getStaticPaths() {
    
    const query = await getDevsApi();
    const paths = query.map(dev => ({
        params: {id: dev.id}
    }));
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}) {
    const query = await getDevsApi();
    //using  js array prototype .find()
    const data = query.find(dev => (dev.id === params.id ));
    
    return {
        props: data,
    }
}


const CardWrapper = styled.div`
background: ${({ theme }) => theme.bodyBackground};
border-top: 10px solid ${({ theme }) => theme.borderTop};
color: ${({ theme }) => theme.text};
position: ${({ theme }) => theme.position};
display: "block";
min-width: ${({ theme }) => theme.minWidth};
word-wrap: ${({ theme }) => theme.wordWrap};
background-color: ${({ theme }) => theme.backgroundColor};
background-clip: ${({ theme }) => theme.backgroundClip};
border-radius: ${({ theme }) => theme.borderRadius};
margin-bottom: ${({ theme}) => theme.marginBottom};
min-height: 300px;
}`;

const Text = styled.div `
color : ${({theme})=> theme.titleColor};

`;

export const Verified = () => {
    return ( <img src='/img/verified.svg' className={homeStyle.verified} />);
  }

export function Back() {
  return (<>
   <a href="/"><FontAwesomeIcon className={homeStyle.backIcon} icon={faUndoAlt} /></a> 
    </>);
}
