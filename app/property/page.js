"use client"
import { useEffect, useState } from 'react';

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/api/property/list');
      const data = await res.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property._id} className="border-b py-2">
            <h2 className="text-lg">{property.title}</h2>
            <p>{property.description}</p>
            <p className="font-semibold">${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}