import React from 'react';
import { toast } from 'react-toastify';

const PartDeleteModal = ({ partModalInfo, setPartModalInfo, refetch }) => {
    const { _id, name } = partModalInfo
    const handleDelte = () => {

        fetch(`https://stormy-spire-75562.herokuapp.com/parts/${_id}`, {
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
            <input type="checkbox" id="part-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete <span className='font-bold text-primary'>{name}</span></h3>

                    <div className="modal-action">
                        <label for="part-modal" className="btn btn-secondary text-base-100">Cancel</label>
                        <button onClick={handleDelte} className='btn bg-red-600 text-base-100'>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartDeleteModal;