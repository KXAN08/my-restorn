import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../redux/cartSlice';

function CartTotal() {
  const total = useSelector(selectCartTotal);

  return (
    <div className="p-4 text-xl font-bold">
      Savatdagi jami summa: {total.toLocaleString()} so‘m
    </div>
  );
}

export default CartTotal;
