import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      let totalPrice = 0
      cartList.forEach(item => {
        totalPrice += item.price * item.quantity
      })

      return (
        <div className="order-summery-container">
          <h1 className="order-total">
            Order Total:
            <span className="order-total-price">{`RS ${totalPrice}`}</span>
          </h1>
          <p className="no-of-items">{items} items in cart</p>
          <button className="check-out-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
