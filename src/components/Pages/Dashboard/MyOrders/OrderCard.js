import { useNavigate } from "react-router-dom";
import './OrderCard.css'
import { AiFillCheckCircle } from 'react-icons/ai';
const OrderCard = ({ order,setOrderModalInfo }) => {
    const navigate = useNavigate()
    const { productName, productPrice, productImage, _id, paid, transactionId,quantity } = order


    return (
        <>
            <div className="order-card-container items-center shadow-xl" >
               <div className="w-full flex justify-center p-4"> <img className="w-36" src={productImage} alt="" /></div>
                <h2 className=" text-xl "><strong>{productName}</strong></h2>
                <p className=" text-xl "> Price : <strong>${productPrice}</strong></p>
                <p className=" text-xl "> Quantity : <strong>${quantity}</strong></p>
                {transactionId && <p>TransactionId : <strong className="text-primary">{ transactionId}</strong></p>}


                {paid ? <span className="text-2xl" > Paid <AiFillCheckCircle className="text-2xl inline text-green-500" /></span>
                    :
                    <div className="my-4">
                        <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className="btn btn-secondary text-base-100 btn-small my">Pay Now</button>

                        <label onClick={()=>setOrderModalInfo(order)} for="my-modal-6" className="btn bg-red-600 text-base-100 mx-5">Cancel</label>

                    </div>
                }

            </div>

        </>
    );
};

export default OrderCard;