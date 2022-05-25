import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order,setOrderModalInfo ,refetch}) => {

    const handleDelte = () => {
        console.log(order)
        fetch(`http://localhost:5000/order/${order._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Canceled your order : ${order.productName} `)
                    setOrderModalInfo(null)
                    refetch()

                }
            })
        
    }

    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>

                    <div class="modal-action">
                        <label for="my-modal-6" class="btn bg-secondary text-base-100">Cancel</label>
                        <label onClick={handleDelte} class="btn bg-red-600 text-base-100">Confirm</label>
                    </div>
                </div>
            </div>


        </>
    );
};

export default OrderDeleteModal;