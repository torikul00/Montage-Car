import React from 'react';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;