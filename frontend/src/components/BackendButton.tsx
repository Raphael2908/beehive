'use client';

import { useState, useTransition } from 'react';
import { sendBackendRequest } from '../lib/actions';

export default function BackendButton() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    setError(null);
    setResponse(null);

    startTransition(async () => {
      const result = await sendBackendRequest();
      
      if (result.success) {
        setResponse(result.data);
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        disabled={isPending}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? 'Loading...' : 'Send GET Request to Backend'}
      </button>
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {response && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-md">
          <strong>Response:</strong>
          <pre className="mt-2 text-sm overflow-auto">{response}</pre>
        </div>
      )}
    </div>
  );
} 