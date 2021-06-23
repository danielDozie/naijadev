import React from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap';
import {useState} from 'react';
import styled from 'styled-components'
import styles from '../styles/Home.module.css';
import myStyle from '../styles/General.module.css';

export default function Hire(props) {

  return (
    <>  
    
    <Modal {...props} centered>
    <ModalWrapper>
        <Modal.Header closeButton>
        <Title>
           <div>
            <p className={myStyle.gradientText}>Hi, I'm {'name'} </p>
            <small className={myStyle.gradientTextDesc}>Hire me for a gig</small>
           </div>
        </Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
            </Form.Row>
            <br/>
            <Form.Row>
                    <Col>
                    <Form.Control placeholder="Email" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Mobile Number" />
                    </Col>
            </Form.Row>
            <br/>
            <Form.Row>
                    <Col>
                    <Form.Control size="lg" type="text" as="textarea"  placeholder="What would you like me to do for you?" />
                    </Col>
            </Form.Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" className={styles.msgBtn} onClick={props.onHide}>
            Send me a direct message
          </Button>
        </Modal.Footer>
        </ModalWrapper>
      </Modal>
      
    </>
  );
}


//Using styled components
const Title = styled.div `
color : ${({theme})=> theme.titleColor};
text-transform: capitalize;
font-size: 16px !important;
font-weight: bold !important;
`;

const ModalWrapper = styled.div`
border-top: 10px solid ${({ theme }) => theme.borderTop};
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.backgroundColor};
border-radius: ${({ theme }) => theme.borderRadius};

`;
