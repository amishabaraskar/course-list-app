import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";

import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnquiryPage from './screens/enquirypage';
import Homepage from './screens/homepage';


 function App() {

  return (
    <>
      <Header title="Course App"/>
      <main className='container mx-auto p-0'>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/enquiry" element={<EnquiryPage/>} />

        </Routes>
      </main>
    
    </>
  )
}

export default App
