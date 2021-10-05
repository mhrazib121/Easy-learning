import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Course from '../Course/Course';


const Service = () => {
    const [services] = useServices();
    return (
        <div>
            <h1> Our Would Class Courses </h1>
            
           <Row xs={1} md={3} className="g-5 mb-5 p-4">
                {
                    services.map(service => <Course key={service.id} service={service}></Course>)
                }
            </Row>
        </div>
    );
};

export default Service;