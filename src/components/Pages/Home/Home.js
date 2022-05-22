import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner/Banner';
import NewsLetter from './NewsLetter/NewsLetter';
import Parts from './Parts/Parts';
import Summary from './Summary/Summary';
import UserReviews from './UserReviews/UserReviews';


const Home = () => {
   
    return (
        <div >
            <Banner />
            <Parts />
            <Summary />
            <UserReviews />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;