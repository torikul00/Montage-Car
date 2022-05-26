import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Shared/firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)

    const handleOrder = (e) => {
        e.preventDefault()
        const email = user.email
        const userName = user.displayName
        const name = e.target.productName.value
        const image = e.target.image.value
        const description = e.target.description.value
        const min_quantity = parseInt(e.target.minQuantity.value)
        const avai_quantity = parseInt(e.target.availableQuantity.value)
        const price = parseInt(e.target.price.value)
        console.log('min',min_quantity)
        console.log('avai',avai_quantity)

        if (avai_quantity < min_quantity) {
            alert('Minimum quantity can not be more than Available quantity .')
            return;
        }
        const porductData = { name, image, description, min_quantity, avai_quantity,email,userName,price }
      console.log(porductData)


        fetch('https://stormy-spire-75562.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(porductData)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.acknowledged) {
                    toast.success('Product Added')
                    e.target.reset()

                }
            })

    }
    return (
        <div className='border shadow-xl m-12 bg-secondary'>
            <div className='buy-product ml-8'>
                <form onSubmit={handleOrder} className=' mx-auto'  >
                    <h2 className="text-3xl font-bold my-8rr text-base-100 text-center ">Add a new Product </h2>
                    <input name='userName' type="text" disabled value={user.displayName} className="input input-bordered input-md w-full  my-2" />
                    <input name='email' type="text" disabled value={user.email} className="input input-bordered input-md w-full my-2" />
                    <input name='productName' type="text" placeholder='Product Name' className="input input-bordered input-md w-full  my-2" required />
                    <input name='image' required placeholder='Image URL' type="text" className="input input-bordered input-md w-full " />

                    <textarea name='description' className="textarea textarea-bordered h-24 w-full block   my-4	" placeholder="Description"></textarea>

                    <input name='minQuantity' required type="number" placeholder="Minimum Quantity" className="input input-bordered input-md w-full  my-2" />

                    <input name='price' required type="number" placeholder="$ Price" className="input input-bordered input-md w-full  my-2" />

                    <input name='availableQuantity' required type="number" placeholder="Available Quantity" className="input input-bordered input-md w-full  my-2" />
                    <button type='submit' className='btn btn-primary block mx-auto my-8'>ADD PRODUCT</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;