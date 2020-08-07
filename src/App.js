import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardSection from './components/CardSection';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container,        FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon } from "reactstrap";
  import {FaCheckDouble, FaSearch} from 'react-icons/fa'

function App() {
  document.body.style.backgroundColor = "rgb(190, 190, 190";
  return (
    <Container>
      <Row style={{ height:'150px'}}>
        <Col>        
        <Form>
            <FormGroup>
                <InputGroup>
                <span className='search-text'><FaSearch className='search'/>
                Search your favorite recipe... </span>
                                 
                </InputGroup>
                
            </FormGroup>
        </Form></Col>
        <Col className='pizza' style={{textAlign:'right'}}>
        <small>Category</small>
        <h1>Pizza & Noodles</h1>
        </Col>
      </Row>
      <Row>
        <Col><CardSection/></Col>
      </Row>
    </Container>

  );
}

export default App;
