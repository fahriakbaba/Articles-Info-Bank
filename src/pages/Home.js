import React from 'react';
import { Link } from "react-router-dom";
import ImageSlider from '../components/ImageSlider';

function Home({ data }) {
  const containerStyles = {
    width: "650px",
    height: "280px",
    margin: "1.5rem auto 7rem auto",
  };

  return (
    <section className="home">
      <div style={containerStyles}>
        <ImageSlider slides={data.filter(item => item.views >= 90)} />
      </div>
      {
        data.map(item => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <Link to={`profile/${item.id}`} className="author">{item.author}</Link>
            <p>{item.body.substring(0, 150)}...</p>
            <button>
              <Link to={`article/${item.id}`} className="home-btn">More Details</Link>
            </button>
          </article>
        ))
      }
    </section>
  )
}

export default Home;