import React from 'react'
import { useState, useEffect } from 'react';

const MainPage = () => {

  const data = [
    "Pastor", "Nathaniel Bassey", "Trumpeter", "Beloved Of The Lord"
  ];

  const [index, setIndex] = useState(0);
  const [identity, setIdentity] = useState(data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1 >= data.length ? 0 : prevIndex + 1;
        setIdentity(data[newIndex]);
        return newIndex;
      });
    }, 4501);

    return () => clearInterval(intervalId);
  }, []);
  const lines = Array(10).fill(null);
  return (
<div>
    <section data-identity={identity}>
      <blockquote>
       
        <span> { identity} </span>
      </blockquote>
    </section>

    <div className="pen__lines-wrapper">
      {lines.map((_, index) => (
        <div key={index} className="pen__line"></div>
      ))}
    </div>
    </div>
  )
}

export default MainPage



