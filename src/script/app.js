//Importing React in our JavaScript
import React from "react";
import ReactDOM from "react-dom/client";

//data

const Header = () => {
  return (
    <header className='header'>
      <div className='site-logo'>
        <a href='javascript:void()'>
          <img
            src='https://media.licdn.com/dms/image/D4D12AQEIzjsnAcFihA/article-cover_image-shrink_600_2000/0/1686565903056?e=2147483647&v=beta&t=YAD0iYLqVjQrcyF8olEYbSqqS1F5RplF5iXL0xI71F8'
            className='logo'
          />
        </a>
        <a href='javascript:void()' className='location'>
          <span className='city'>Hyderabad</span> MLA Colony, Banjara Hills,
          Hyderabad <span className='bi bi-chevron-down loc-arrow'></span>
        </a>
      </div>
      <nav className='navbar'>
        <a href='javascript:void()' className='nav-links'>
          <span className='bi bi-search'></span> Search
        </a>
        <a href='javascript:void()' className='nav-links'>
          <span className='bi bi-percent'></span> Offers
        </a>
        <a href='javascript:void()' className='nav-links'>
          <span className='bi bi-patch-question'></span> Help
        </a>
        <a href='javascript:void()' className='nav-links'>
          <span className='bi bi-person'></span> Sign In
        </a>
        <a href='javascript:void()' className='nav-links cart'>
          <span className='bi bi-box2 '></span> Cart
        </a>
      </nav>
    </header>
  );
};

const BannerSection = () => {
  return (
    <section className='banner-section'>
      <div className='about-banner'>
        <h2>What's on your mind?</h2>
        <div className='btn-banner'>
          <button className='btn-arrow btn-left'>
            <span className='bi bi-arrow-left '></span>
          </button>
          <button className='btn-arrow btn-right'>
            <span className='bi bi-arrow-right'></span>
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

const Content = () => {
  return (
    <div className='content'>
      <BannerSection />
    </div>
  );
};

const mainContent = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

//creating root to rendering element
const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(mainContent());
