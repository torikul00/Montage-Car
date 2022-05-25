import React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import Footer from '../../Shared/Footer';
const Blogs = () => {

    return (
        <>
            <div className='blog-container'>
                <div className="blog w-1/2 ml-20 mt-10">
                    <h1 className='text-3xl text-secondary font-bold my-4'> How will you improve the performance of a React Application ?</h1>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4' />
                    <p className='inline'>
                        For good React application performance we should use low resolution image and optimizable css animations. Avoid unnecessary props rendering. All component handle locally if possible.We should pass only the relevant value to Main instead of the style object.Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.
                    </p>
                </div>
                <div className="blog w-1/2 ml-20 mt-10">
                    <h1 className='text-3xl text-secondary font-bold my-4'>What are the different ways to manage a state in a React application ?</h1>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4' />
                    <p className='inline'>
                        There is a many kind of ways to manage state in React application. For example


                        <ul className='list-decimal ml-8'>
                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>
                        </ul>
                        Local state is most often managed in React using the useState hook.
                        Globaly state use when we need to update data in our application.
                        the server state use when we integrated with  from an external server.
                        URL data hold all data over the url or pathname in our application.
                    </p>
                </div>
                <div className="blog w-1/2 ml-20 mt-10">
                    <h1 className='text-3xl text-secondary font-bold my-4'>  How does prototypical inheritance work ? </h1>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4' />
                    <p className='inline'>
                        The prototypical inheritance works, In JavaScript any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above . functions are able to have properties. All functions have a special property named prototype. We can add properties to the prototype .We can now use the new operator to create an instance of properties based on this prototype.



                    </p>
                </div>
                <div className="blog w-1/2 ml-20 mt-10">
                    <h1 className='text-3xl text-secondary font-bold my-4'> What is a unit test? Why should write unit tests ?</h1>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4' />
                    <p className='inline'>Unit testing is a way to check our code performance.The purpose is to validate that each unit of the software code performs as expected. Unit testing usually use a developer when applcation develop by user. When developer develop for a application section or a funciton for test. Unit Testing has tow types
                        <ul className='list-decimal ml-8'>

                            <li>Manual</li>
                            <li>Automated</li>
                        </ul>
                    </p>
                </div>
                <div className="blog w-1/2 ml-20 mt-10 mb-8">
                    <h1 className='text-3xl text-secondary font-bold my-4'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name ?</h1>
                    <BsArrowReturnRight className='text-3xl text-primary font-bold inline mr-4' />
                    <p className='inline'>
                        If i have an array of products. I can find prodcut by the product name.
                        first i need to use JavaScript Array method of <strong>filter()</strong>all products. then each prodcut come and filtered by search keyword in product name. for doing this ,we need <strong>includes()</strong> funciton for finding the product by product name. 


                    </p>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Blogs;