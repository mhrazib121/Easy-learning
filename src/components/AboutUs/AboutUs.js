import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="d-flex align-items-center">
            <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?size=626&ext=jpg" alt="" />
                <div>
                    <h1>We should provide lesson with great technics</h1>
                </div>
                
            </div>
            <div className="text-center my-5">
                <h1> Improve your knowledge for your better</h1>
                <p>Whether you want to learn or to share what you know,<br /> you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
            </div>
            <div className="d-flex gap-5 my-5">
                <div className="bg-warning p-3 text-black">
                    <h2>Work with us</h2>
                    <h5>At Easy Learning, we’re all learners and instructors. We live out our values every day to improve your learning abality. We will try hardly to make your dream. </h5>
                </div>
                <div className="bg-secondary p-3">
                    <h2>Join our community</h2>
                    <h5>We have a community to discuss frankly and explore your idea. You can share any problem in there and our active member will provide you best solution related with that.</h5>
                </div>
                <div className="bg-info p-3">
                    <h2>Our blog</h2>
                    <h5>Want to know what we’ve been up to lately? Check out our Easy learning blog to get more information, ideas and projects, and more.</h5>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;