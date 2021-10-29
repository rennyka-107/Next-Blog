import React, { useEffect, useRef } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function CardStyle1({
  imgSrc,
  header = "",
  meta = "",
  description = "",
  icon = "user",
  iconContent = "",
}) {
  return (
    <Card >
      {/* <Image src={imgSrc} wrapped ui={false} /> */}
      <div className="image">
        <img
          style={{ height: "250px"   }}
          src={imgSrc}
          alt="fake src"
        />
      </div>
      <Card.Content>
        <Card.Header>Daniel</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content> */}
    </Card>
    // <div className="card" style={{
    //   background: `url(${imgSrc})`,
    //   backgroundSize: "cover"
    // }}>
    //   <div className="image-data">
    //     {/* <div
    //       className="background-image"
    //     >
    //       <Image src={imgSrc} style={{ width: "100%", height: "100%" }} />
    //     </div> */}
    //     <div className="publication-details">
    //       <a href="#" className="author">
    //         <i className="fas fa-user" />
    //         Mateus de Souza
    //       </a>
    //       <span className="date">
    //         <i className="fas fa-calendar-alt" />
    //         March 30, 2020
    //       </span>
    //     </div>
    //   </div>
    //   <div className="post-data">
    //     <h2 className="title">Artifical Intelligence</h2>
    //     <h3 className="subtitle">A peek at whats lies ahead</h3>
    //     <p className="description">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
    //       lectus proin nibh. Eu feugiat pretium nibh ipsum consequat.
    //     </p>
    //     <div className="cta">
    //       <button>Read more</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardStyle1;

{
  /* <Card style={styleRootCard}>
<Image style={{ height: "50%"}} src={imgSrc} wrapped ui={false} />
<Card.Content>
  <Card.Header>{header}</Card.Header>
  <Card.Meta>
    <span className="date">{meta}</span>
  </Card.Meta>
  <Card.Description>{description}</Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
    <Icon name={icon} />
    {iconContent}
  </a>
</Card.Content>
</Card> */
}
