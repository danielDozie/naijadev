import Head from 'next/head'
import { GET_BLOGS } from '../../src/graphQL/graphqueries';
import {Container, Jumbotron, Card, Col, Button} from 'react-bootstrap'
import styled from 'styled-components';
import layoutStyle from '../../src/styles/Layout.module.css'
import homeStyle from '../../src/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faChevronCircleLeft, faHeart, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import client from '../../src/lib/apolloClient';
library.add(fas)


export default function Blog({blog}) {
    return ( 
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>DEV.HUB - {blog.title}</title>
        </Head>
        <Container>
            <div className="mx-auto">
                <img src={blog.featured_image?.url} className={homeStyle.blogImage} />
            <br />
            <Text>
                <h3 className={homeStyle.title}>{blog.title}</h3>
            </Text>
    </div>
    <div className="row mt-3 p-4"> 
        <div class="col-md-12">    
            <Text>
                <div dangerouslySetInnerHTML={{ __html: blog.content}} />
            </Text>    
            <p></p>
        </div>
    </div> 
    </Container>)
    </div>)
}


export async function getStaticPaths() {
    
    const {data} = await client.query({
        query : GET_BLOGS,
    })
    const paths = data.blogs?.map(blog => ({
        params: {id: blog.id}
    }));
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}) {
    
    const {data} = await client.query({
        query : GET_BLOGS,
    });
    const result = data.blogs.find(blog => (blog.id === params.id ));
    //console.log(result)
    return {
        props: {
            blog : result,
        }
    }
}




const Text = styled.div `
color : ${({theme})=> theme.titleColor};

`;


export function Back() {
  return (<>
   <a href="/"><FontAwesomeIcon className={homeStyle.backIcon} icon={faUndoAlt} /></a> 
    </>);
}


const myStyles = {
    image : {
        width: '80%',
        height: '300px',
        borderRadius : '10px',
        margin : '0 auto',
        textAlign : 'center'
    }
}