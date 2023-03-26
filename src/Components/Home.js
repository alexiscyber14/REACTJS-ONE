import React from 'react';
import '../App.scss';

const ParaStyles = {
  borderRight: '10px solid rgb(9, 7, 39)',
  color: 'black',
  padding: '2%',
  boxShadow: '2px 2px 8px rgb(226, 226, 226)',
};

const Home = () => (
  <div className="homeContent">
    <h2>Welcome to Math Magician labs</h2>
    <p className="homeP" style={ParaStyles}>
      One of the most exciting things about mathematics is that it is an open-ended field of-
      study with endless possibilities for exploration and discovery.
      New mathematical concepts and structures are being discovered all the time,
      and there is always more to learn and discover. Whether you are interested-
      in geometry, algebra, calculus, or any other branch of mathematics,
      there are always new challenges and opportunities to expand your understanding-
      and push the boundaries of what we know.
    </p>

    <p className="homeP" style={ParaStyles}>
      In addition to its practical applications, mathematics is also a beautiful and
      abstract field that offers-
      endless opportunities for exploration and discovery.
      The study of mathematics can be both challenging and exhilarating,
      as you dive into the world of abstract concepts, explore new mathematical structures,
      and solve complex problems. Whether you are interested in pure mathematics or
      applied mathematics,
      the study of mathematics is a rewarding and fulfilling pursuit that can open up new worlds
      of knowledge and possibility. So if you have a curious mind and a passion for learning,
      I highly encourage you to consider studying mathematics and embark on an exciting journey
      of discovery and growth.
    </p>
  </div>
);
export default Home;
