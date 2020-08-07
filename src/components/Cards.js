import React from 'react';
import {    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container, Row, Col} from 'reactstrap'
import '../App.css'

const Cards = ({recipe, time='1.5 hr'}) => {
    return (
        <Card className='card' style={{ borderRadius: 15}}>
            <CardImg className='card-image' top width="100%" src={recipe.image} alt="Card image cap" style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}/>
            <CardBody className='card-body'>
            <CardTitle className='txt'>{recipe.name}</CardTitle>
            <CardSubtitle className='txt'>{time}</CardSubtitle>
            <CardText className='txt'>{recipe.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default Cards;