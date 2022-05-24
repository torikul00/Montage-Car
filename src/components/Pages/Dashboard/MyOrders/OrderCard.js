import { useNavigate } from "react-router-dom";


const OrderCard = ({ order }) => {


    const navigate = useNavigate()
    const { productName, productPrice, quantity, productImage, _id, paid } = order
    return (

        <div>
            <img src={productImage} alt="" />
            <h2>{productName}</h2>
            <p> Price : ${productPrice}</p>

            {paid ? <p>Paid</p>
                :
                <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className="btn btn-secondary text-base-100">Pay Now</button>
            }

        </div>

    );
};

export default OrderCard;