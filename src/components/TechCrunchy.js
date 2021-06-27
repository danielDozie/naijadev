import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import MySpinner from './MySpinner';
import styled from 'styled-components';



export default function TechCrunchy(){

const [slides, setSlides] = useState(null);
    useEffect(() => {   
      setTimeout(() => {
            const options = {
              method: 'GET',
              url: 'https://techcrunch-unofficial.p.rapidapi.com/news',
              headers: {
                'x-rapidapi-key': '894b073653msh04277acd862cf10p19b953jsn92d1782094a7',
                'x-rapidapi-host': 'techcrunch-unofficial.p.rapidapi.com'
              }
            };
            
            axios.request(options).then(function (response) {
              const crunchies = response.data;

              setSlides(
                <>
                    <Slider autoplay={5000}>
                      {crunchies.map((article, index) => <div key={index}>
                        <a href={article.url} target="_blank" >
                        <NewsTitle><h2 style={myStyle.gradient}>{article.title}</h2></NewsTitle></a>
                        <Article><span style={myStyle.article}> {article.content} </span></Article>
                        
                      </div>)}
                    </Slider>
                </>
              )
            }).catch(function (error) {
              console.error(error);
          });
        
      }, 4000);
    }, [setSlides]);  
        
    if (!slides) return <div><MySpinner /><br/></div>
    
    return (
      <>
        <div>{slides}</div>
      
      </>
    );
}



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