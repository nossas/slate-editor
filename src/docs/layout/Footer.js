import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = ({gh}) => {
  const [user, repo] = gh.split('/');
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col className="text-xs-center">
            <p className="social">
              <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`} frameBorder="0" scrolling="0" width="100" height="20px" />
              <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=fork&count=true`} frameBorder="0" scrolling="0" width="100" height="20px" />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
