import React from 'react';
import { toast } from 'react-toastify';

const PartDeleteModal = ({ partModalInfo, setPartModalInfo, refetch }) => {
    const { _id, name } = partModalInfo
    const handleDelte = () => {

        fetch(`http://localhost:5000/parts/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    refetch()
                    setPartModalInfo(null)
                    toast.success(` ${name} Deleted seccessful `)
                }

            })
    }


    return (
        <>


            <input type="checkbox" id="part-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete <span className='font-bold text-primary'>{name}</span></h3>

                    <div class="modal-action">
                        <label for="part-modal" class="btn btn-secondary text-base-100">Cancel</label>
                        <button onClick={handleDelte} className='btn bg-red-600 text-base-100'>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartDeleteModal;