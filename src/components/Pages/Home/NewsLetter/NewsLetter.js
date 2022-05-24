import React from 'react';
import './NewsLetter.css'
import { FaNewspaper } from 'react-icons/fa';
const NewsLetter = () => {
    return (
        <div className='news-container'>
            <div className="overly ">
                <div className='flex justify-center items-center flex-col px-20 h-full'>
                <FaNewspaper className='text-6xl my-4 '/>
                <h1 className='text-4xl font-bold mb-4'>SUBSCRIBE TO OUR NEWS DAILY NEWS LETTER</h1>
                <p className='text-center'>a written report, issued periodically, typically by a business, institution, or other organization, that presents information and news to people with a specific interest in the organization or subject: our co-op's monthly newsletter;an employee newsletter.</p>
                <div className='m-8'>
                    <input className='nl-input' type="text" />
                    <button className='btn btn-primary'>SUBSCRIBE</button>
                </div>
               </div>
            </div>

        </div>
    );
};

export default NewsLetter;