import React from 'react';

interface FormFieldOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  type?: 'text' | 'email' | 'select' | 'textarea';
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  options?: FormFieldOption[];
}

export default function FormField({
  type = 'text',
  label,
  id,
  placeholder,
  required = false,
  options = []
}: FormFieldProps) {
  const inputClasses = "rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-[#002D62] focus:text-black lg:px-[30px] lg:py-[15px]";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-[10px] font-semibold text-black">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          className={`${inputClasses} min-h-[120px] w-full`}
          placeholder={placeholder}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          className={inputClasses}
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}
