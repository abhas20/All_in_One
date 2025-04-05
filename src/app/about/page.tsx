"use client"
import { Barchat } from '@/components/Barchat'
import React, { useState } from 'react'



export default function page() {


  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-card-foreground p-6">
        <h1 className="text-4xl font-bold text-accent mb-4">About Us</h1>
        <p className="text-lg text-primary-foreground text-center max-w-2xl">
          Welcome to our website! We are dedicated to providing the best services and solutions to our customers. Our team is passionate, skilled, and committed to excellence.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-accent mb-2">Our Mission</h2>
          <p className="text-primary-foreground text-center max-w-xl">
            To deliver high-quality products and services that bring value to our customers and make a positive impact on the world.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-accent mb-2">Our Team</h2>
          <p className="text-primary-foreground text-center max-w-xl">
            Our team consists of talented individuals with diverse backgrounds, working together to achieve our goals and exceed expectations.
          </p><br/>
          <Barchat/>
        </div>
      </div>
    </div>
  )
}
