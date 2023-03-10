import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default NavBar;
