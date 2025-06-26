import React from 'react';
import './Form.css';
import logo from './img/sarc white logo.png';
import banner from './img/banner.png';
import FormInputs from './FormInputs';
import SearchState from './Contexts/SearchState'

function Form() {
  return (
    <SearchState>
    <div className='form'>
       <header className="header">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="heading">YEARBOOK 2025</h1>
      </header>
      <div> <img src={banner} alt='banner' className='banner'/></div>
      {/* <div className='subhead'><h2>Hold your memories in your hand</h2></div> */}
      <div className='subhead'><h2>We have closed the registration for this year. Thank you for your interest in the Offline Institute Yearbook. Those who have filled this form will be contacted for payment shortly.</h2></div>
      <div class="yearbook-preview">
            <p>To get more info about the physical Yearbook</p>
            <a href="https://docs.google.com/document/d/121Bk5j9D1-Yv8pKUt4_lVHSAsXQiauzvJVilbE02Kso/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Click Here</a>
        </div>
      <FormInputs/>
    </div>
    </SearchState>
  );
}

export default Form;
