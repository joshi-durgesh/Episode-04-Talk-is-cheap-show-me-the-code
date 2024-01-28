//Importing React in our JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
//data
import BannerData from "../../data/banner.json";
import TopBrandsData from "../../data/top_brands.json";

const Header = () => {
  return (
    <header className='header'>
      <div className='site-logo'>
        <a href=''>
          <img
            src='https://media.licdn.com/dms/image/D4D12AQEIzjsnAcFihA/article-cover_image-shrink_600_2000/0/1686565903056?e=2147483647&v=beta&t=YAD0iYLqVjQrcyF8olEYbSqqS1F5RplF5iXL0xI71F8'
            className='logo'
          />
        </a>
        <a href='' className='location'>
          <span className='city'>Hyderabad</span> MLA Colony, Banjara Hills,
          Hyderabad <span className='bi bi-chevron-down loc-arrow'></span>
        </a>
      </div>
      <nav className='navbar'>
        <a href='' className='nav-links'>
          <span className='bi bi-search'></span> Search
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-percent'></span> Offers
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-patch-question'></span> Help
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-person'></span> Sign In
        </a>
        <a href='' className='nav-links cart'>
          <span className='bi bi-box2 '></span> Cart
        </a>
      </nav>
    </header>
  );
};

const BannerItem = (props) => {
  return (
    <a href=''>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          props.banData.imageId
        }
        className='banner-img'
      />
    </a>
  );
};

const BannerBtn = (prop) => {
  return (
    <button
      id={"banner-btn-" + prop.side}
      className={"btn-arrow btn-" + prop.side}
    >
      <span className={"bi bi-arrow-" + prop.side}></span>
    </button>
  );
};

const BannerSection = () => {
  return (
    <section className='banner-section'>
      <div className='about-banner'>
        <h2>What's on your mind?</h2>
        <div className='btn-banner'>
          <BannerBtn side='left' />
          <BannerBtn side='right' />
        </div>
      </div>
      <div className='banner-products'>
        {BannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

const RestaurantCard = () => {
  return (
    <a href='#'>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          TopBrandsData[0].info.cloudinaryImageId
        }
      />
    </a>
  );
};

const TopBrandsSection = () => {
  return (
    <section className='top-brand-section'>
      <div className='about-banner'>
        <h2>Top restaurant chains in Hyderabad</h2>
        <div className='btn-banner'>
          <BannerBtn side='left' />
          <BannerBtn side='right' />
        </div>
      </div>
      <div>
        <RestaurantCard />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <div className='content'>
      <BannerSection />
      <TopBrandsSection />
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
