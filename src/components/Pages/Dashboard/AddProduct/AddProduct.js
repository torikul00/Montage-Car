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


        fetch('http://localhost:5000/product', {
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
        <div>
            <div className='buy-product ml-8'>
                <form onSubmit={handleOrder} className=' mx-auto'  >
                    <h2 className="text-3xl font-bold my-4">Add a new Product </h2>
                    <input name='userName' type="text" disabled value={user.displayName} class="input input-bordered input-md w-full max-w-xs my-2" />
                    <input name='email' type="text" disabled value={user.email} class="input input-bordered input-md w-full max-w-xs my-2" />
                    <input name='productName' type="text" placeholder='Product Name' class="input input-bordered input-md w-full max-w-xs my-2" required />
                    <input name='image' required placeholder='Image URL' type="text" class="input input-bordered input-md w-full max-w-xs" />

                    <textarea name='description' class="textarea textarea-bordered h-24 w-full block  max-w-xs my-4	" placeholder="Description"></textarea>

                    <input name='minQuantity' required type="number" placeholder="Minimum Quantity" class="input input-bordered input-md w-full max-w-xs my-2" />

                    <input name='price' required type="number" placeholder="$ Price" class="input input-bordered input-md w-full max-w-xs my-2" />

                    <input name='availableQuantity' required type="number" placeholder="Available Quantity" class="input input-bordered input-md w-full max-w-xs my-2" />
                    <button type='submit' className='btn btn-primary block mx-auto'>ADD PRODUCT</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;