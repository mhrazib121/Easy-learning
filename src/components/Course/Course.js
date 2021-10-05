import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img, serviceName, tutorName, fee} = props.service;
    return (
        <div>
            <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <div>
                            <p>Course Tutor: <span className="text-danger">{tutorName} </span></p>
                            <h4> Course Fee: ${fee}</h4>
                            <button className="bg-success border-0 rounded-3 p-1 text-white">Enroll Now</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;