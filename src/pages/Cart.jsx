import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Savat</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg">{item.name}</h3>
                <p>{item.price} so‘m</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => dispatch(decrement(item.id))} className="px-2 py-1 bg-gray-200">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => dispatch(increment(item.id))} className="px-2 py-1 bg-gray-200">+</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">Jami: {total} so‘m</p>
          </div>
        </div>
      ) : (
        <p>Savat bo‘sh.</p>
      )}
    </div>
  );
};

export default Cart;
