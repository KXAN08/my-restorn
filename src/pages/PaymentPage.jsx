import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice';

const PaymentPage = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setPaid(true);
    dispatch(clearCart());
  };

  if (paid) {
    return <div className="text-center p-10 text-green-600 font-bold">To‘lov muvaffaqiyatli amalga oshirildi!</div>;
  }

  return (
    <div className="max-w-3xlcontainer mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Savat</h1>
      {items.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <>
          <ul className="mb-6">
            {items.map(item => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name} x {item.quantity}</span>
                <span>${((item.price || 0) * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="text-xl font-semibold mb-4">Jami: ${total.toLocaleString()}</div>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            To‘lov qilish
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
