import React, { useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';

const Overseas = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for travel destinations or accommodations"
              aria-label="Search for travel destinations or accommodations"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Overseas;
