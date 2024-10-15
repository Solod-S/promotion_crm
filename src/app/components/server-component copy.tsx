import React from 'react';

export interface ServerComponentCopyProps {
  // extends React.InputHTMLAttributes<HTMLInputElement>
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log(`Server Component Copy`);
  return (
    <div>
      Server Component Copy
      {children}
    </div>
  );
}
