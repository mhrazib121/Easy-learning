import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Course from '../Course/Course';

const Home = () => {
    const [services] = useServices();
    return (
        <div className="container">
            {/* Top Section  */}
            <div className="d-flex align-items-center">
                <img
                    className="d-block w-25"
                    src="https://ouch-cdn2.icons8.com/mNmgaMeWfaOPnMGhtgPx2bSw9nIrR1vcw-at5IesXeI/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzEv/OGE2YTZiZTEtZGY2/Yy00ODJlLThmMDUt/MmUwODlhYjA4M2Y1/LnN2Zw.png"
                    alt="First slide"
                />
                <div className=" text-center p-5">
                    <h3>Best Platform to learn</h3>
                    <p>"Easy learnig always try to provide best service to explore your learning abality. We will ensure great tutor with excillent technic to provide lesson"</p>
                </div>
            </div>
            {/* Service Section  */}
            <div className="mt-5">
                <h1>A broad selection of services</h1>
                <p>Choose your best course that your need from 500+ course, and improve your knowledge with us.</p>
            </div>
            <Row xs={1} md={3} className="g-5 mb-5 p-4">
                {
                    services.slice(0,4).map(service => <Course key={service.id} service={service}></Course>)
                }
            </Row>

            {/* Bottom Section  */}

            <div className="d-flex align-items-center">

            <div className=" text-center p-5">
                    <h3>Transform your life through education</h3>
                    <p>"Learners around the world are launching new careers, advancing in their fields, and enriching their lives."</p>
                </div>

                <img
                    className="d-block w-50"
                    src="https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg"
                    alt="First slide"
                />
                
            </div>
        </div>
    );
};

export default Home;