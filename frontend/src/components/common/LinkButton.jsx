
/**
 * @file LinkButton.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable button component that can act as a link or anchor
 */


import Button from "./Button";
import { Link } from "react-router-dom";

const LinkButton = ({ children, to, href, className = "", ...props }) => {
  
  // Always add relative block to allow stacking context for active state
  const appliedClass = `relative block ${className}`;

  // If 'to' property is provided, use it as a React Router Link
  // Otherwise, use 'href' as a regular anchor link
  if (to) {
    return (
      <Button as={Link} to={to} className={appliedClass} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Button as="a" href={href} className={appliedClass} {...props}>
      {children}
    </Button>
  );
};

export default LinkButton; 