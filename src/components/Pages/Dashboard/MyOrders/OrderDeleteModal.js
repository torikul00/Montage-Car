import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order,setOrderModalInfo ,refetch}) => {

    const handleDelte = () => {
     
        fetch(`https://stormy-spire-75562.herokuapp.com/order/${order._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.deletedCount) {
                    toast.success(`Canceled your order : ${order.productName} `)
                    setOrderModalInfo(null)
                    refetch()

                }
            })
        
    }

    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to cancel your order - <span className='text-primary'>{order.productName }</span></h3>

                    <div className="modal-action">
                        <label for="my-modal-6" className="btn bg-secondary text-base-100">Cancel</label>
                        <label onClick={handleDelte} className="btn bg-red-600 text-base-100">Confirm</label>
                    </div>
                </div>
            </div>


        </>
    );
};

export default OrderDeleteModal;