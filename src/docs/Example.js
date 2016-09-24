import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1>Example</h1>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Example;
