
/**
 * @file Button.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable button component providing a consistent and styled button interface
 */

const defaultStyle = "bg-green-400 text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(50,205,50,0.5)] active:scale-95";

const Button = ({ children, onClick, type = "button", className = "", as: Component = "button", ...props }) => {

  // If className already has a background, dont use the default style
  const hasBg = /\bbg-\S+/.test(className);
  const appliedClass = hasBg ? className : `${defaultStyle} ${className}`;

  // Check if the component is a button
  if (Component === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={appliedClass}
        {...props}
      >
        {children}
      </button>
    );
  }

  // For other components
  return (
    <Component
      onClick={onClick}
      className={appliedClass}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;