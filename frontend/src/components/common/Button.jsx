
/**
 * @file Button.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable buttom component providing a consistent and styled button interface
 */

const Button = ({ children, onClick, type = "button", className = "", ...props }) => (
    <button
        type={type}
        onClick={onClick}
        className={`bg-green-400 text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(50,205,50,0.5)] active:scale-95 ${className}`}
        {...props}
  >
    {children}
  </button>
);

export default Button;