import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Content = (props) => {
  return (
    <Container className="m-t-3" fluid>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
