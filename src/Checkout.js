// import React from 'react';
// import "./Checkout.css";
// import CheckoutProduct from './CheckoutProduct';
// import { useStateValue } from './StateProvider';
// import Subtotal from "./Subtotal";
// // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined';

// function Checkout() {
//     const [{ basket, user }, dispatch] = useStateValue();
//     return (
//         <div className='checkout'>
//             <div className="checkout__left">
//                 <img className="checkout__ad"
//                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

//                 <div>
//                     <h3 className='checkout__hello'>Hello, {user.email.split('@')[0]}</h3>
//                     <h2 className="checkout__title">
//                         Your Shopping Basket
//                         <ShoppingBasketIcon  className='checkout__cart'/></h2>

//                     {basket.map(item=>(
//                         <CheckoutProduct
//                         id={item.id}
//                         title={item.title}
//                         image={item.image}
//                         price={item.price}
//                         rating={item.rating}
//                         />
//                     ))}

//                 </div>
//             </div>

//             <div className="checkout__right">
//                 <Subtotal />
//             </div>
//         </div>
//     )
// }

// export default Checkout


import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            {/* <h1>Smash the like button</h1> */}
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <h3>Hello,{user?.email.split('@')[0]}</h3>
                <div>
                    {/* <h2 className="checkout_title">Your shopping basket</h2> */}
                    <h2 className="checkout__title">
                        Your Shopping Basket
                        <ShoppingBasketIcon className='checkout__cart' /></h2>




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

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout