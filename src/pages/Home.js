import React from 'react';
import { Link } from "react-router-dom";
import ImageSlider from '../components/ImageSlider';

function Home({ data, lang }) {
  const containerStyles = {
    width: "650px",
    height: "280px",
    margin: "1.5rem auto 3rem 20px",
  };

  const subTitleImage = {
    fontSize: ".8rem",
    marginTop: "8px",
    color: "darkred"
  }

  console.log("home page", lang);

  return (
    <main>
      <section className="home">
        <figure style={containerStyles}>
          <ImageSlider slides={data.filter(item => item.views >= 90)} />
          <figcaption style={subTitleImage}>
            {lang==="en" ? "The most seeing articles" : "En çok görüntülenen makaleler"}
          </figcaption>
        </figure>
        {
          data.map(item => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <Link to={`profile/${item.id}`} className="author">{item.author}</Link>
              <p>{item.body.substring(0, 150)}...</p>
              <button>
                <Link to={`article/${item.id}`} className="home-btn">{lang === "en" ? "More Details" : "Daha Fazla"}</Link>
              </button>
            </article>
          ))
        }
      </section>
      <aside>
        <h4>{lang==="en" ? "Author's Views" : "Yazarların Görüntülenmesi"}</h4>
        <ul>
          {
            data.map(item => (<div>
              <li>
                <p>{item.author}</p>
                <span>{lang==="en" ? "Views" : "Görüntülenme"}: {item.views}</span>
              </li>
            </div>))
          }
        </ul>
      </aside>
    </main>
  )
}

export default Home;