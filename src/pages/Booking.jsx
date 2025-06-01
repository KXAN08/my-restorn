import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: 1 });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Band qilish ma’lumotlari:', form);
  };

  return (
    <div className="p-4 max-w-md container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Joy band qilish</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ism" className="border p-2" />
        <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2" />
        <input name="time" type="time" value={form.time} onChange={handleChange} className="border p-2" />
        <input name="guests" type="number" value={form.guests} onChange={handleChange} min="1" className="border p-2" />
        <button type="submit" className="bg-red-600 text-white py-2">Band qilish</button>
      </form>
    </div>
  );
};

export default Booking;
