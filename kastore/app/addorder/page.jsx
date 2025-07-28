'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const AddOrder = () => {

    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState(null);
    const [order, setOrder] = useState({
        "parcel-receiver": "",
        "parcel-phone": "",
        "parcel-city": "",
        "parcel-address": "",
        "parcel-note": "",
        "parcel-price": "",
        "parcel-nature": ""
    });


    const getCities = async () => {
        try {
            const res = await axios.get("https://api.ozonexpress.ma/cities");
            const cityOptions = Object.keys(res.data.CITIES).map((key) => ({
                value: res.data.CITIES[key].ID,
                label: res.data.CITIES[key].NAME
            }));
            setCities(cityOptions);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getCities();
    }, []);


    const handleCityChange = (selectedOption) => {

        setSelectedCities(selectedOption);

        setOrder({
            ...order,
            'parcel-city': selectedOption?.value || ""
        });

    };


    return (
        <div>

            <h1 className='p-[1rem]'>Add Order</h1>

            <form action="" className='w-full px-[1rem] flex flex-col gap-[.7rem]'>
                
                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='Name Client' />
                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='Phone' />

                <Select
                    options={cities}
                    value={selectedCities}
                    onChange={handleCityChange}
                    placeholder="Search city"
                    className="basic-single-select text-black"
                    classNamePrefix="select"
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            borderColor: 'orange',
                            boxShadow: 'none',
                            '&:hover': { borderColor: 'orange' },
                            color: 'black'
                        })
                    }}

                />



                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='address' />
                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='price' />
                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='Name Product' />
                <input type="text" className='w-full h-[2.2rem] pl-[1rem] rounded-sm' placeholder='commanet' />
                <button type='button' className='text-white bg-black p-4 rounded-sm'>Send Order</button>
            </form>

        </div>
    )
}

export default AddOrder
