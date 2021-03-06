import React from 'react';
import { toast } from 'react-toastify';
const AddReview = () => {

    const handleReview = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const reviewMessage = e.target.reviewMessage.value
        const reviewData = { name, image, reviewMessage, }

        fetch('https://stormy-spire-75562.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(data => {
               
                if (data.acknowledged) {

                    toast.success('Thanks for feedback')
                    e.target.reset()

                }
            })
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handleReview}>
                    <h1 className='text-4xl my-12 text-secondary'>Your feedback is importants to  us !!</h1>
                    <input className=' my-3 block input input-bordered input-primary w-96' required type="text" placeholder='name' name='name' />
                    <input className='my-3 block input input-bordered input-primary w-96' required type="text" placeholder='Your profile image URL' name='image' />
                    <textarea className='w-96 my-3 textarea textarea-primary' required name="reviewMessage" placeholder='Your message'  rows="5"></textarea>
                    <button className=' block btn btn-secondary text-base-100' type='submit'> Send Feedback</button>


                </form>
            </div>
        </div>
    );
};

export default AddReview;