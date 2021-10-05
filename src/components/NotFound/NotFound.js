import React from 'react';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="w-25 p-4" src="https://www.computerhope.com/jargon/e/error.png" alt="" />
            <h1> <span className="text-danger"> 404 </span> Page Not Found</h1>
            <p>The requested page could not be found, Please try again...</p>
        </div>
    );
};

export default NotFound;