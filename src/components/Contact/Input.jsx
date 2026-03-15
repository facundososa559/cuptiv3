import React from 'react';

function Input({ label, inputType, inputName, inputId, value, onChange, options }) {
  return (
    <div className='flex flex-col gap-(--spacing-xxs)'>
      <label className="heading-6 text-(--primary)" htmlFor={inputId}>{label}</label>
      {inputType === 'select' ? (
        <select
          id={inputId}
          name={inputName}
          value={value}
          onChange={onChange}
          className='border-1 border-black/20 rounded-[4px] h-[40px] px-3 focus:outline-none'
        >
          <option value="">Selecciona una opción</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          className='border-1 border-black/20 rounded-[4px] h-[40px] px-3 focus:outline-none'
          type={inputType}
          name={inputName}
          id={inputId}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;
