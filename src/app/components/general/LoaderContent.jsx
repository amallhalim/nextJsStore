'use client';
import React from 'react';

export default function LoaderContent({ message = 'Loading...🙈🙈' }) {
  return (
    <div className="flex items-center justify-center h-[70vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
}
