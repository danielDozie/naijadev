import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function News() {
    const api_url = process.env.BLOG_API;
    const [content, setContent] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
        axios.get(api_url)
        .then(blogs => { 
          const all_blogs = blogs.data; 
          setContent(
            <>
            <div>
                { all_blogs.map(blog =>
                <div>
                <NewsTitle index={blog.id}>
                    <FontAwesomeIcon className={styles.gradientText} icon={faBlog}/><a href="#"><span style={myStyle.gradient}> {blog.title}</span></a> 
                </NewsTitle>
                
                <Article>
                <small style={myStyle.article}>{blog.article.slice(0, 30) + '...'}<a href=""> Read more</a></small>
                </Article>
                <hr style={myStyle.hr} />
                </div>
                )}
                
            </div>
            <br/>
            <br/>
            </>
          );
        })
        }, 3000);
        
        
    }, [setContent]);
    
    if(!content) return <div style={myStyle.spnner}><Spinner /></div>;
    if(content === "") return 'No Data Found.';
    
    return (
      <div>{content}</div>
      );
}


export const Spinner = () => {
    return (
        <SpinnerContainer>
        <Loader
          type="Bars"
          color="#14557b"
          height={30}
          width={30}
          timeout={6000} //6 secs
        />
        </SpinnerContainer>
        
      );
}




const myStyle = {
    title: {
        textTransform: 'uppercase',
        fontSize: '9px',
    },
    hr: {
        width: '60%',
        borderTop: '2px solid #9e9e9e99',
    },
    article: {
        color: '#6e7c80',
    },
    gradient:{
        /* Fallback: Set a background color. */
        backgroundColor: 'rgb(34, 103, 144)',
        textTransform: 'uppercase',
        fontSize: '9px',
        /* Create the gradient. */
        // backgroundImage: 'linear-gradient(45deg, #14557b, #7fcec5)',
        
        /* Set the background size and repeat properties. */
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent', 
        mozBackgroundClip: 'text',
        mozTextFillColor: 'transparent',
    },
    spinner:{
        textAlign: 'center !important',
    }
};

const NewsTitle = styled.div`
  width: 90%;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
  padding: 2px;
  line-height: 20px;
      font-weight: 600;
      font-size: 11px;
  `;
  
  const Article = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2px;
  font-size: 11px;
  color: ${({theme}) => theme.text};
`;

const SpinnerContainer = styled.div`
    text-align: center;
`   