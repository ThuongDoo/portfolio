import React from 'react'
import './styles.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post('URL_OF_EMAIL_API', data); // Thay 'URL_OF_EMAIL_API' bằng URL của API gửi email thực tế.
      reset(); // Đặt lại form sau khi gửi thành công.
      alert('Email đã được gửi đi thành công!');
    } catch (error) {
      console.error('Lỗi khi gửi email:', error);
      alert('Đã có lỗi xảy ra khi gửi email.');
    }
  };
  return (
    <div className="contact section" id='contact'>
      <h2 className='heading'>Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit(onSubmit)} className='emailForm'>
        <div>
          <input {...register('to', { required: true })} type="email" placeholder='Full Name' className='inputField'/>
          <input placeholder='Email Address' className='inputField'/>
        </div>
        <div>
          <input {...register('subject', { required: true })} type="text" placeholder='Mobile Number' className='inputField'/>
          <input {...register('subject', { required: true })} type="text" placeholder='Email Subject' className='inputField'/>
        </div>
        <div>
          <textarea {...register('message', { required: true })} rows="4" className='inputField' placeholder='Your Message'/>
        </div>
        <div className='btn-box contact-btn'>
          <button type="submit" className='btn'>Send Email</button>
        </div>
      </form>
    </div>
  )
}

export default Contact