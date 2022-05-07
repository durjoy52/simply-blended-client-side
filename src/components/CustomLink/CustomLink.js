import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
        style={{ textDecoration: match ? "underline" : "none" ,color: match ? '#A43539':''}}
        to={to}
        {...props}
      >
        {children}
      </Link>
        </div>
    );
};

export default CustomLink;