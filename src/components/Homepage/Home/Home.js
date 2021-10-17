import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-3xl">Docmed</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link class="mr-5 hover:text-gray-900 font-semibold">Home</Link>
                        <Link class="mr-5 hover:text-gray-900 font-semibold">Departments</Link>
                        <Link class="mr-5 hover:text-gray-900 font-semibold">Doctors</Link>
                        <Link class="mr-5 hover:text-gray-900 font-semibold">Contact</Link>
                    </nav>
                    <Link>
                        <button class="inline-flex items-center bg-blue-600 border-0 py-1 px-4 text-white focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Home;