import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row
} from 'reactstrap';

const Home = ({title, gh}) => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-xs-center m-b-3">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-4">{title}</h1>
              <p className="lead">
                Easy to use React Bootstrap 4 components
              </p>
              <p>
                <Button outline color="danger" href={`https://github.com/${gh}`}>View on Github</Button>
                <Button tag={Link} color="danger" to="/example">Example</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1>Getting Started</h1>
            <p className="App-intro">
              Install and save the component to your project
            </p>
            <pre>
              <PrismCode className="language-bash">
                npm install component-template --save
              </PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
