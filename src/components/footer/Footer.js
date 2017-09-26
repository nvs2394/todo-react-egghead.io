import React, { Component } from 'react';
import { Link } from '../../router';

export const Footer = () =>{
  return (
    <div className="Footer">
      <Link>All</Link>
      <Link>Active</Link>
      <Link>Complete</Link>
    </div>
  )
}