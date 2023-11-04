interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type = "text", onChange, disabled, label }) => {
  return (
    <div className="w-full">
      {label && <p className="text-xl text-white font-semibold mb-2">{label}</p>}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
          w-full
          p-4 
          text-lg 
     bg-gray
          border-2

          rounded-[15px]
          outline-none
          text-gray
          focus:border-blue-500
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </div>
   );
}
 
export default Input;