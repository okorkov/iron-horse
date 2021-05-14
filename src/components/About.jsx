import React from 'react';

const About = () => {
  return (
    <div id="about" >
      <img src="https://live.staticflickr.com/65535/51175695010_8173e223cb_c.jpg"  className="avatar" alt="Charles Gehrig"/>
      <p className='about-text-hello'>Hello!</p>
      <p className="about-text">
        Thanks for stopping by! We are a small, full service, family-
        owned wood business based in Fairfax, California. We specialize in
        custom, reclaimed wood projects from sustainable, local sources. It is a
        blessing to live in Northern California, with such a wide variety of species.
        We also specialize in esoteric species from around the world. All of our
        wood is one hundred percent reclaimed, and handpicked by our
        specialists; only the top twenty percent making the cut. Most of our
        projects are custom; created to the client&#39;s specification, and completely
        tailored to your liking! We always have a nice, rotating inventory as well if
        you would like to do your own project. We are a full-service wood mill,
        and offer planing, sanding, and milling services; collaberating with a local
        Master Metalsmith if needed. Feel free to {<a href="#contacts" style={{color:'white'}}>reach out</a>}, and let&#39;s talk about
        your next project!</p>
    </div>
  );
}

export default About;
