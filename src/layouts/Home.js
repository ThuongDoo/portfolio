import React from 'react'
import './Home.css'
function Home() {
  const email = 'domanhthuong20122002@gmail.com';
  const subject = 'Chủ đề email';
  const body = 'Nội dung email';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className='home' id='home'>
      <div className="home-content">
        <h1>Hello,</h1>
        <h1>I'm <span>Do Manh Thuong</span></h1>
        <div className="text-animate">
          <h3>Mobile Developer</h3>
        </div>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum reprehenderit veniam itaque praesentium asperiores. Deleniti, labore consequuntur nobis odit ipsa adipisci, omnis fuga ut saepe incidunt officiis ex quidem. Deserunt!</p> */}
        <div className="btn-box">
          <a href="#" className='btn'>Hire Me</a>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
      <div className="home-sci">
          <a href="https://www.facebook.com/domanhthuong20122002/" target='_blank'><i className='bx bxl-facebook' ></i></a>
          <a href={mailtoLink} target='_blank'><i className='bx bxl-gmail' ></i></a>
          <a href="#"><i className='bx bxl-github' ></i></a>
      </div>
      <div className="home-imgHover"></div>
    </div>
  )
}

export default Home