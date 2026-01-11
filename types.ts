
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}