import React from 'react';

export enum PageRoute {
  HOME = '/',
  RESUME = '/resume',
  PORTFOLIO = '/portfolio',
  HOMETOWN = '/hometown',
  ECOMMERCE = '/ecommerce',
  HOBBIES = '/hobbies'
}

export interface NavItem {
  label: string;
  path: PageRoute;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}