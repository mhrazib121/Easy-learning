import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useCategories from '../../Hooks/useCategories';

const Category = () => {
    const [Categories] = useCategories();
    return (
        <div className="container mt-5">
            <h1 className="text-center">Top Categories</h1>
            <Row xs={1} md={3} className="g-5 mb-5 p-4">
                {
                    Categories.map(singleCategory =>
                        <div key={singleCategory.id}>
                            <Col className="shadow-lg">
                                <Card className="img-overflow">
                                    <Card.Img className="img-hover" variant="top" src={singleCategory.img} />
                                    <Card.Body>
                                        <Card.Title>{singleCategory.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    )
                }
            </Row>
        </div>
    );
};


export default Category;