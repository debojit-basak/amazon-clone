import React, {useState, useEffect} from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from './reducer'
import axios from './axios'
function Payment() {
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }

        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false)
            history.replaceState('./orders')
        })
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to ="/checkout">{basket?.length}</Link>) items</h1>
                {/* payment section - delivery address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 Road</p>
                            <p>USA</p>
                        </div>
                    </div>
                {/* payment section - review items */}
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                {/* payment methode - */}
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method Stripe</h3>
                        </div>
                        <div className="payment__details">
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>
                                    <div className="payment__priceContainer">
                                        <CurrencyFormat 
                                        renderText = {(value) => (
                                            <>
                                            <h3>Order Total: {value}</h3>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value = {getBasketTotal(basket)}
                                        displayType = {"Text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                        />
                                        <button disabled={processing||disabled||succeeded}>
                                            <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                                        </button>
                                    </div>
                                    {error && <div>{error}</div>}
                                </form>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Payment