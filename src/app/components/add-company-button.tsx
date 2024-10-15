'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './Company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export interface AddCompanyProps {}

export default function AddCompanyButton({}: AddCompanyProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onClose={() => setShow(false)}
        show={show}
        onSubmit={console.log}
      />
    </>
  );
}
