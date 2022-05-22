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
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere velit voluptatem rem quia, praesentium deserunt fugiat? Harum voluptas eligendi vero. Vel, nostrum at consequuntur dolore voluptatem delectus. Tempora velit expedita laudantium accusantium illo suscipit ab? Illum id assumenda minus? Illo!</p>
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