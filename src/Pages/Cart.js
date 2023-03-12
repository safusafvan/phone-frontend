import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Button from 'react-bootstrap/Button';
function Cart() {






    // const navigate = useNavigate()




    // const sub = () => {

     
           
           
        
    //         navigate("/details")
    // }

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className='text-center'> your cart is empty</h1>

    return (
        <div>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h5>Card({totalUniqueItems})total item:({totalItems})</h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.img} style={{ height: '6rem' }} />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>Quantity({item.quantity})</td>
                                                <td>
                                                    <button
                                                        className='btn btn-info ms-2'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                    >-</button>
                                                    <button
                                                        className='btn btn-info ms-2'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    >+</button>
                                                    <button
                                                        className='btn btn-info ms-2'
                                                        onClick={() => removeItem()}
                                                    >Remove Item</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-auto ms-auto'>
                        <h2>Total Price:${cartTotal}</h2>

                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-danger m-2'
                            onClick={() => emptyCart()}>Clear Card</button>
                     
                        <Button variant="info" href='/details'>Order now</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart