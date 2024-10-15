import React from 'react';
import { headers } from 'next/headers';

export interface ClientComponentProps {
  // extends React.InputHTMLAttributes<HTMLInputElement>
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log(`Client Component`);
  console.log(headers());
  return (
    <div>
      Client Component
      {children}
    </div>
  );
}
