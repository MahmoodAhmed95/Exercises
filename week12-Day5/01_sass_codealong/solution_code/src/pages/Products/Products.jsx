import './Products.css';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import SeedOneProductListItem from '../../components/SeedOneProductListItem/SeedOneProductListItem'

import {crops} from '../../crops'

export default function Products(props){
    
    return (
        <>
        <Container>
        <Row><Col>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1>Products</h1>

        <div className="seedProductGrid">
        {
            crops.map(crop =>{
                return <SeedOneProductListItem key={crop.seed_id} crop={crop} />
            })
        }
        </div></Col></Row>
        </Container>
        </>
    )
}