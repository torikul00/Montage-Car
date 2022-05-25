import { useNavigate } from "react-router-dom";
import './OrderCard.css'
import { AiFillCheckCircle } from 'react-icons/ai';
const OrderCard = ({ order,setOrderModalInfo }) => {
    const navigate = useNavigate()
    const { productName, productPrice, productImage, _id, paid, transactionId } = order


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

                        <label onClick={()=>setOrderModalInfo(order)} for="my-modal-6" class="btn bg-red-600 text-base-100 mx-5">Cancel</label>

                    </>
                }

            </div>

        </>
    );
};

export default OrderCard;