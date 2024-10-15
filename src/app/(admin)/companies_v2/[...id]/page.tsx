import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}
// http://localhost:3000/companies_v2/1/2/3

export default function Page({ params }: PageProps) {
  const { id } = params;
  const serverTime = new Date().toTimeString();
  return (
    <>
      <Header>Companies ({id})</Header>
      <p>{new Date().toTimeString()}</p>
      <p>{serverTime}</p>
    </>
  );
}
