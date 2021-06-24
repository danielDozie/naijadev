import Head from 'next/head'
import Image from 'next/image'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
const title = process.env.SiteTitle;
import styles from '../../src/styles/About.module.css'
import styled from 'styled-components'
import client from '../../src/lib/apolloClient';
import { GET_BLOGS } from '../../src/graphQL/graphqueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faInfo, faInfoCircle, faUser, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

export default function Index({blogs}) {
  return (
    <>
        <Head>
            <title>Blog - {title}</title>
        </Head>
        <Container fluid>
            <Title>
                <h1 className={styles.title} id='title'>DEV.HUB BLOG </h1>
                <p className={styles.description} id='description'>Fresh and informative contents, brought to you by our amazing team.</p>
            </Title>
            <CardWrapper className={styles.aboutCard}>
            <BlogContent>
            <div className="d-md-flex">
                <div className="col-md-4">
                    <img src="/img/scene5.svg" width="350px"/>
                </div>
                <div className="col-md-6">
                <Text>
                    <h3 className={styles.title} id='title'>Our Blog</h3>
                    <div>
                    <br/>
                        <p>ngDevHub is distinct platform for developers recruitment. The idea behind this simple. We carefully list out some of the best developers who are very proficient in different tech stacks, usually, these developers are recommended, then we add them to the platform manually after series of Q's & A's as to verify their stack proficiency.  
                        During this process, we look out for these in all our developers:
                        <ul>
                            <li>Positive Attitude</li>
                            <li>Big-Picture Focus</li>
                            <li>Good Time and Task Management</li>
                        </ul>
                        </p>
                    </div>
                </Text>
                </div>            
            </div> 
            <br/>              
            {/*  */}
            <br/>
            <Container>

            {
                blogs.map(blog =>(
                    <a href={'/blog/'+ `${blog.id}`}>
                    <BlogContainer>
                    <Row>
                        <Col md={2} sm={12}>
                            <Image src="/" width="100px" height="100px"/>
                        </Col>
                        <Col md={10} sm={12}>
                            <Title>{blog.title}</Title>
                            <div style={myStyles.articleFont}>{blog.article.slice(0,330) + '... Read more!'}</div>
                            <br/>
                        <div>
                        <small style={myStyles.articleFont}><FontAwesomeIcon icon={faInfoCircle}/> <sub style={myStyles.ml}> <span style={myStyles.altColor}>Author:</span> {blog.author}</sub>
                        <sub style={myStyles.ml}> <span style={myStyles.altColor}>Publish Data:</span> <Moment fromNow>{blog.createdAt}</Moment> </sub></small>
                        </div>
                        </Col>
                    </Row>
                    </BlogContainer>
                    </a>
                ))
            }
                
            </Container>
            </BlogContent>
            </CardWrapper>
        </Container>

    </>
  );
}


const Title = styled.div `
color : ${({theme})=> theme.titleColor};
font-weight: 800;
font-size: 12px;
//text-transform: uppercase;
margin-bottom: 15px;
`;

const BlogContent = styled.div `
    color: ${({theme})=> theme.text};
    margin-top: 20px;
    padding: 20px;
`;

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
`;

const BlogContainer = styled.div`
background-color: ${({ theme }) => theme.blogListBG};
color: ${({ theme }) => theme.text};
border-radius: 5px;
padding: 20px;
box-shadow:  0 1px 12px rgba(14, 159, 203, 0.17);
width: 95%;
margin: 0 auto;
margin-bottom: 30px;
`;

const Text = styled.div `
color : ${({theme})=> theme.titleColor};
`;


const myStyles = {
    articleFont: {
        color: '#6e7c80',
        fontSize: '11px',
    },
    ml :{
        marginLeft: '15px',
    },
    altColor:{
        color: '#14557b',
    }
}

export const getStaticProps = async () => {

   const {data} = await client.query({
        query: GET_BLOGS,
    })
    const res = data.blogs;
    return {
        props: {
            blogs : res,
        }
    }
}