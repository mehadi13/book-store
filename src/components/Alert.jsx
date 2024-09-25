import React from 'react';

export default function Alert({ title, message, onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <p className='font-semibold'>{message}</p>
                <button
                    onClick={onClose}
                    className="bg-red-500 text-white font-bold py-2 px-4 mt-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
