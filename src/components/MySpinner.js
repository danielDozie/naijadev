import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function MySpinner () {
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


const SpinnerContainer = styled.div`
    text-align: center;
`   