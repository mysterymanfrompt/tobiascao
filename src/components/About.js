import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-holder">
        <img className="about-image" src="./media/about.jpg" alt="" />
      </div>
      <div className="about-text-holder">
        <h1>Sobre nós</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? Omnis, ratione
          reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi necessitatibus laudantium quam, provident sapiente suscipit
          vitae, ut consequatur atque at aliquam sequi officiis eaque. Corporis
          dolor magni deserunt vel a.
        </p>
      </div>
    </div>
  );
};

export default About;
