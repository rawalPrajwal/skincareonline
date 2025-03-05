import styles from "./Cart.module.css";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartAllProduct.filter((item) => item.id !== productId);
    setCartAllProduct(updatedCart);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>

      {cartAllProduct.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
          {cartAllProduct.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <img
                src={product.img}
                alt={product.title}
                className={styles.cartImg}
              />
              <div className={styles.cartDetails}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>{product.rating}</p>
                <p className={styles.productPrice}>{product.price}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
