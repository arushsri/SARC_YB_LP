import React, { Component, useState } from 'react';
import './FormInputs.css';
import axios from 'axios';
import FormSearch from './Components/FormSearch'

function FormInputs() {
  const[data ,setData]=useState({
    fullname:'',
    email:'',
    roll:'',
    phone:'',
    ldap:'',
    department:'',
    degree:'',
    address:'',
    ncopies:'1',
    typeofcopy:'complete',
    otherSelectedPeople: [],
    comments:'',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange= (e)=>{
    const{name,value}=e.target
          setData({
            ...data,
            [name]:value
          })
    console.log(data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/formdata/', data);
      console.log(response.data);
      setSuccess(true);
      setData({
        fullname: '',
        email: '',
        roll: '',
        phone: '',
        ldap: '',
        department: '',
        degree: '',
        address:'',
        ncopies: '',
        typeofcopy: '',
        otherSelectedPeople: [],
        comments: '',
      });
    } catch (error) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}className='form-container'>
        <div className='form-input'>
            <label htmlFor='fullname'  className='required'>FullName</label>
            <input type='text' id='fullname' name='fullname'placeholder='enter your name' value={data.fullname}onChange={handleChange} required/>
           
        </div>
        <div className='form-input'>
            <label htmlFor='email' className='required'>E-mail ID(Preferably Gmail)</label>
            <input type='email' id='email' name='email' value={data.email} placeholder='enter email'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='roll'  className='required'>Roll No.</label>
            <input type='text' id='roll' name='roll' value={data.roll}placeholder='your roll no.' onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='phone' className='required'>Mobile No.(Preferably WhatsApp)</label>
            <input type='phone' id='phone' name='phone' value={data.phone}placeholder='mobile number'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='LDAP' className='required'>LDAP Email</label>
            <input type='text' id='ldap' name='ldap' value={data.ldap}placeholder='*******@iitb.ac.in'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='department' className='required'>Department</label>
            <input type='text' id='department' name='department' value={data.department} placeholder='your department'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='degree' className='required'>Degree</label>
            <input type='text' id='degree' name='degree' value={data.degree}placeholder='your degree'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='address' className='required'>address where you want your yearbook to be delieverd</label>
            <input type='text' id='address' name='address' value={data.address}placeholder='your address'onChange={handleChange} required/>
        </div>
        <div className='form-input'>
            <label htmlFor='type of  copy' className='required'>Type  of physical copy of Yearbook you would like to have</label>
            <select id='type of copy' name='typeofcopy' value={data.typeofcopy} onChange={handleChange} required>
                <option value='complete'>Complete yearbook with your own profile along with all the graduating friends profiles you have written for</option>
                <option value='onlytheirown'>Only with your own profile</option>
                <option value='customised'>customised yearbook with some specific graduating friends profile(select your friends list in next option)</option>
             </select>
        </div>
        <div className='form-input'>
            <label htmlFor='ncopies' className='required'>Number of physical copies of your yearbook you want</label>
            <select id='ncopies' name='ncopies' value={data.ncopies} onChange={handleChange}required>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='more than 2'>More than 2(write in comments below)</option>
             </select>
        </div>
        {/* <div className='form-input'>
        </div> */}
        <FormSearch data={data} setData={setData}/>
        <div className='form-input'>
            <label htmlFor='comments'>Any comments</label>
            <textarea id='comments' name='comments'placeholder='comments here' value={data.comments} onChange={handleChange}>
            
            </textarea>
        </div>
        <button type='submit' className='submit-button' disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <div className='error-message'>{error}</div>}
      {success && <div className='success-message'>Form submitted successfully!</div>}
    </form>
  );
}

export default FormInputs;