import React, {useState, useEffect} from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container, Row, Col
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import Cards from "./Cards";
import '../App.css'

const CardSection = () => {

    const [recipe, setRecipe] = useState([])

    const fetchRecipe = async() => {
        const results = await Axios.get('http://starlord.hackerearth.com/recipe')
        console.log('RESPONSE', results.data);

        setRecipe(results.data);
    }

    useEffect(() => {
        fetchRecipe()
      }, [])
    return (
        <CardColumns className='card-section'>
            {recipe && recipe.length>0 ? recipe.map(item => {
               return <Cards recipe = {item}/>
            })
        : 'Loading...'}
        </CardColumns>
    );
};

export default CardSection;