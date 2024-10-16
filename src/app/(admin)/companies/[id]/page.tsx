import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page({ params }: PageProps) {
  const serverTime = new Date().toTimeString();

  // Преобразование id в число и проверка
  const id = Number.parseInt(params.id);
  if (isNaN(id)) {
    notFound(); // Здесь мы можем вернуть notFound, если id недопустимый
  }

  return (
    <>
      <Header>Companies ({params.id})</Header>
      <p>{new Date().toTimeString()}</p>
      <p>{serverTime}</p>
    </>
  );
}
