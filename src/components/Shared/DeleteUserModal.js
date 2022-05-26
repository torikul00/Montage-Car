import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ user, refetch, setUsereModalInfo }) => {

    const handleDelete = () => {

        fetch(`https://stormy-spire-75562.herokuapp.com/user/${user.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    toast.success(`Deleted : ${user.email} `)
                    setUsereModalInfo(null)
                    refetch()

                }
            })

    }
    return (
        <>


            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="delete-modal" className="btn bg-red-600 btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <p className="text-xl"> Are you sure to delete <span className='font-bold'>{user.email} ?</span></p>

                    <div className="modal-action">
                        <label for="delete-modal" className="btn bg-secondary text-base-100">Cancel</label>
                        <button onClick={handleDelete} className="btn bg-red-600">Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal;