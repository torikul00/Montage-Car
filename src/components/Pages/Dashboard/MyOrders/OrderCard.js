import { useNavigate } from "react-router-dom";
import './OrderCard.css'
import { AiFillCheckCircle } from 'react-icons/ai';
const OrderCard = ({ order }) => {
    const navigate = useNavigate()
    const { productName, productPrice, productImage, _id, paid, transactionId } = order

    const handleDelete = () => {

        console.log('item deleted ', productName)
    }

    return (
        <>
            <div className="order-card-container" >
                <img src={productImage} alt="" />
                <h2>{productName}</h2>
                <p> Price : ${productPrice}</p>
                {transactionId && <p>TransactionId : {transactionId}</p>}


                {paid ? <span className="text-2xl" > Paid <AiFillCheckCircle className="text-2xl inline text-green-500" /></span>
                    :
                    <>
                        <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className="btn btn-secondary text-base-100 btn-small">Pay Now</button>

                        <label for="my-modal" className="btn btn-small bg-red-500 text-base-100 mx-4">Cancel</label>

                    </>
                }

            </div>

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to Cancel this order </h3>

                    <div onClick={handleDelete} class="modal-action">
                        <label for="my-modal" class="btn btn-small bg-red-500 text-base-100">Confirm</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCard;