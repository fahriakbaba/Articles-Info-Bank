import React from 'react';
import { Link } from "react-router-dom";

function Home({data}) {
  console.log("home page => data: ", data);
  return (
    <section className="home">
      {
        data.map(item => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <Link to={`/profile/${item.id}`} className="author">{item.author}</Link>
            <p>{item.body.substring(0,100)}</p>
            <button>
              <Link to={`/article/${item.id}`} className="home-btn">More Details</Link>
            </button>
          </article>
        ))
      }
    </section>
  )
}

export default Home;