import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    //get details with id by dynamic routing
    const { _id } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    //filterout specific item 
    const exactItem = items.filter(item => item.id == _id);
    console.log(exactItem);

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">
                            <h1 class="title-font font-medium text-6xl mb-4 text-gray-500">{exactItem[0]?.title}</h1>
                            <div class="leading-relaxed">{exactItem[0]?.description}</div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p class="leading-relaxed"> Total Patients</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                            <p class="leading-relaxed">Tests</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p class="leading-relaxed">Pending</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p class="leading-relaxed">In theater</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img class="object-cover object-center w-full h-full" src={exactItem[0]?.img} alt="stats" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Details;