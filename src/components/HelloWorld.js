import React, { Component, PropTypes } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
};

const defaultProps = {
  name: 'World',
  message: 'This is a simple component.'
};

class HelloWorld extends Component {
  render() {
    const { name, message, children } = this.props;

    return (
      <Jumbotron className="text-xs-center">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-4">Hello {name}!</h1>
              <p className="lead">
                {message}
              </p>
              {children}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;

export default HelloWorld;
