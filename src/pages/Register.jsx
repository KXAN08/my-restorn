import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Ro‘yxatdan o‘tish ma’lumotlari:', form);
  };

  return (
    <div className="p-4 max-w-md container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Ro‘yxatdan o‘tish</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ism" className="border p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Parol" className="border p-2" />
        <button type="submit" className="bg-red-600 text-white py-2">Ro‘yxatdan o‘tish</button>
      </form>
    </div>
  );
};

export default Register;
