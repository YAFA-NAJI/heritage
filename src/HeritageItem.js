// src/HeritageItem.js
import React from 'react';

export default function HeritageItem({ item }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      </div>
    </div>
  );
}
