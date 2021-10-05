import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img, serviceName, by, fee} = props.service;
    return (
        <div>
            <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <div>
                            <p>{by}</p>
                            <h4>${fee}</h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;