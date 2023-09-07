import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Home(props){
    return (
        <>
        <div className="homeOuter">
        <Container>
            <Row>
                <Col>
                    <h1>Going to Seed...</h1>
                    <h2>and then letting it grow</h2>
                </Col>
            </Row>
        </Container>
        </div>
        

        </>
    )
}