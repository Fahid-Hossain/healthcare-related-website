import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="">
                <div id="" className="container mx-auto">
                    <div className="text-white py-24 px-10 object-fill banner h-5/6">
                        <div className="md:w-1/2">
                            <h1 className="font-bold text-sm uppercase">Our Service</h1>
                            <p className="text-7xl font-bold text-white-500">Health Care</p>
                            <p className="text-7xl mb-10 leading-none text-white-400">For whole family</p>
                            <Link to="/contact" className="bg-purple-700 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-purple-800 hover:text-white-800">Contact us</Link>
                        </div>
                    </div>
                    <br />
                </div>

               
            </div>
            <div className="flex justify-between w-12 mx-auto pb-2">
                <button id="sButton1" className="bg-purple-400 rounded-full w-4 pb-2 " ></button>
                <button id="sButton2" className="bg-blue-400 rounded-full w-4 p-2"></button>
            </div>
        </div>
    );
};

export default Banner;