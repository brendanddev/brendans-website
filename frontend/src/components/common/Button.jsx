
/**
 * @file Button.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable buttom component providing a consistent and styled button interface
 */


const Button = ({ children, onClick, type = "button", className = "", as: Component = "button", ...props }) => {
  
  // Check if the component is a button
  if (Component === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={className}
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
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;