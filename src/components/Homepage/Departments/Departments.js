import React, { useEffect, useState } from 'react';
import Department from './Department';

const Departments = () => {
    //useState for fakeData
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div>
            <div className="mt-5">
                <h1 className="text-4xl font-bold mb-3">Our Departments</h1>
                <p className="text-gray-500">All of our departments has best quality services.</p>
                <p className="text-gray-500">Doctors are all certified.</p>

            </div>

            <div className="grid gap-3 md:grid-cols-3 sm:grid-cols-2">
                {
                    departments.map(department => <Department department={department} key={department.id}></Department>)
                }
            </div>

        </div >
    );
};

export default Departments;