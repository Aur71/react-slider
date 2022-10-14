import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const people = data;

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }

    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <main>
      <section className="slider-container">
        <AiOutlineArrowLeft
          className="arrow arrow-left"
          onClick={() => setIndex(index - 1)}
        />

        <AiOutlineArrowRight
          className="arrow arrow-right"
          onClick={() => setIndex(index + 1)}
        />

        {people.map((item, personIndex) => {
          let postition = 'nextSlide';

          if (personIndex === index) {
            postition = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            postition = 'lastSlide';
          }

          return (
            <div className={`${postition} slider-item `} key={item.id}>
              <div className="img-container">
                <img src={item.image} alt={item.name} />
              </div>
              <h2>{item.name}</h2>
              <h3>{item.title}</h3>
              <p>{item.quote}</p>
              <FaQuoteRight className="quote" />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default App;
