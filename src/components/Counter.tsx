import React from 'react';

interface CounterProps {
  label: string;
  count: number;
}

const Counter: React.FC<CounterProps> = ({ label, count }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-pink-600">{count}</div>
      <div className="text-sm text-purple-600">{label}</div>
    </div>
  );
};

export default Counter;