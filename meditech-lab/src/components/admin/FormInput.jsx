'use client';

export default function FormInput({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
