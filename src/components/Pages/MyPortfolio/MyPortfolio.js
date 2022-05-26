import React from 'react';
import portfolio from '../../../images/profile.jpg'
import { BsArrowReturnRight } from 'react-icons/bs';
import Footer from '../../Shared/Footer';
const MyPortfolio = () => {
    return (
        <>
            <div className='md:ml-20 lg:ml-20 m-12 lg:w-1/2 md:w-1/2 w-full'>
                <img src={portfolio} alt="" />
                <h1 className='text-4xl font-bold text-primary my-4'>TORIKUL ISLAM</h1>
                <h1 className='font-bold text-xl text-primary my-4'>About me</h1>

                <p>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4 inline' />   I am Torikul islam, currently I am studying in 4th semester  at <strong>Dhaka Polytechnic Institute</strong>. I live in Enayetpur sirajgonj,Bangladesh. last 5 month i am learning web development at <strong>Programming Hero</strong>. Now i made this website with my highest  effort.
                    <br />

                    <p className='mt-8 font-bold' >  <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4 inline' />  My skills in Web Delelopment</p>
                    <ul className='list-decimal ml-8 mb-4'>
                        <li><strong>html</strong> (hyper text markup language)</li>
                        <li><strong>CSS</strong> (cascading style sheets)</li>
                        <li><strong>JavaSrcipt</strong></li>
                        <li><strong>ReactJs</strong> (frontend libary) </li>
                    </ul>

                    <strong> <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4 inline' />  Here is my some projects link</strong>  <br />

                    <ul className='list-decimal ml-8'>
                        <li><a className='text-xl underline' target='_blank' href="https://fruits-buddy.web.app/">Fruits Buddy</a></li>
                        <li><a className='text-xl underline' target='_blank' href="https://electrical-galaxy.web.app/">Electrical Galaxy</a></li>
                        <li><a className='text-xl underline' target='_blank' href="https://sound-sonic-torikul.netlify.app/">Sound Sonic</a></li>

                    </ul>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default MyPortfolio;