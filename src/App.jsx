import React, { useEffect } from 'react';
import Index from "./component";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css/animate.min.css';


import './App.css';

export default function App() {
  useEffect(
    () => {
      AOS.init();
    }, []
  )

  return (
    <Index />
  )
}
