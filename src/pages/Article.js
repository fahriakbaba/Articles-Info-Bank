import React from 'react';
import { useParams } from 'react-router';
import { jsPDF } from "jspdf";

function Article({ data }) {
  const { articleID } = useParams()
  const findItem = data.find(item => item.id === Number(articleID));

  const createPDF = () => {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }



  return (
    <section className='article'>
      <h4>{findItem.title}</h4>
      <span>{findItem.author}</span>
      <div>
        <img src={findItem.url} alt="articleImage" />
      </div>
      <button onClick={createPDF}>Create PDF</button>
    </section>
  )
}

export default Article;