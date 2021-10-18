import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="grid gap-4 grid-cols-2 md:gap-6 items-center">
                <div>
                    <p className="text-4xl font-semibold text-red-400">Sorry, we couldn't find the page you're looking for.</p>
                    <Link to="/home">
                       
                        <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white my-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Go back Home
                        </button>
                    </Link>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48324.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default NotFound;