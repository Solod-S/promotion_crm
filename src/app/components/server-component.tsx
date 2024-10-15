import React from 'react';

export interface ServerComponentProps {
  // extends React.InputHTMLAttributes<HTMLInputElement>
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log(`Server Component`);
  return (
    <div>
      Server Component
      {children}
    </div>
  );
}
