"use client"
import { useState } from 'react';

export default function CreateProperty() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/property/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, price, owner: 'yourUserId' }), // Replace with actual user ID
    });

    if (res.ok) {
      alert('Property created!');
      // Clear form or redirect
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Create</button>
      </form>
    </div>
  );
}