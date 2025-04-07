"use client"
import React, { useEffect, useState } from 'react';

export default function Page() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = `https://cse.google.com/cse.js?cx=${process.env.NEXT_PUBLIC_Cx}`;
      script.async = true;
      document.body.appendChild(script);
    }, []);

  return (
    <>
    <h1 className="text-3xl font-bold mb-4 text-center">Search the Web</h1>
    <div className="flex flex-col min-h-screen bg-muted p-4 justify-center">
      <div className='bg-primary-foreground rounded-lg p-4 flex flex-col mb-4 h-100 justify-center align-items-center '>
      <p className='text-chart-1 text-2xl text-center font-bold'>Have Doubts search it...</p><br/>
      <div className="gcse-search"></div>
      </div>
      
    </div>
    </>
  );
}

