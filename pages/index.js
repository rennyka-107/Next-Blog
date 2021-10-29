import CardStyle1 from "components/CardStyle1";
import Categories from "components/Categories";
import Pagination from "components/Pagination";
import Slide from "components/Slide";
import { ResponsiveContainer } from "components/WrapContainer";
import React, { memo } from "react";
import { Card, Grid, Label, Segment } from "semantic-ui-react";

// const styleP = {
//   textAlign: "center",
//   fontSize: "2.5rem",
//   fontWeight: 500,
//   margin: 0,
//   padding: ".5rem 0 .5rem 0",
//   color: "black",
// };

const listSlides = [
  <CardStyle1
  key="1"
    imgSrc="https://swiperjs.com/demos/images/nature-1.jpg"
    header="Matthew"
    meta="Joined in 2015"
    description="Matthew is a musician living in Nashville."
    icon="user"
    iconContent="22 Friends"
  />,
  <CardStyle1
  key="2"
    imgSrc="https://swiperjs.com/demos/images/nature-2.jpg"
    header="Matthew"
    meta="Joined in 2015"
    description="Matthew is a musician living in Nashville."
    icon="user"
    iconContent="22 Friends"
  />,
  <CardStyle1
  key="3"
    imgSrc="https://swiperjs.com/demos/images/nature-3.jpg"
    header="Matthew"
    meta="Joined in 2015"
    description="Matthew is a musician living in Nashville."
    icon="user"
    iconContent="22 Friends"
  />,
  <CardStyle1
  key="4"
    imgSrc="/images/4481677.jpg"
    header="Matthew"
    meta="Joined in 2015"
    description="Matthew is a musician living in Nashville."
    icon="user"
    iconContent="22 Friends"
  />,
];

const extra = (
  <>
    <span
      style={{ fontSize: "1.5rem", fontWeight: "bold", fontStyle: "italic" }}
    >
      Categories:
    </span>
    <Label>IMAX</Label>
    <Label icon="globe" content="Additional Languages" />
  </>
);

const configBlogSlide = {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  grabCursor: true,
};

export default function Home(props) {
  console.log(props.data, "props");
  return (
    <>
      <Categories />

      <Segment className="newest-grid-container" vertical>
        {/* <Grid columns={2} doubling padded centered stretched> */}
        {/* <Grid.Column style={{ padding: "0 1em 0 0" }} width={8}> */}
        <Card
          className="card-home-news"
          centered
          fluid
          // header={<h3 style={styleP}>News</h3>}
          description={
            // <Slide {...configBlogSlide} listSlides={listSlides} />
            listSlides.length > 0 && (
              <Grid
                padded
                stretched
                style={{ justifyContent: "space-between" }}
              >
                {listSlides &&
                  listSlides.map((sl, idx) => (
                    <Grid.Column
                      mobile={16}
                      tablet={8}
                      computer={5}
                      style={{ alignItems: "center" }}
                      key={idx}
                    >
                      {sl}
                    </Grid.Column>
                  ))}
                <Grid.Row centered width={8}>
                  <Pagination
                    activePage={1}
                    onPageChange={(e, data) => {
                      console.log(data, "??");
                    }}
                    totalPages={10}
                  />
                </Grid.Row>
              </Grid>
            )
          }
          // extra={extra}
        />
        {/* <Card
          className="card-home-news"
          centered
          fluid
          // header={<h3 style={styleP}>News</h3>}
          description={
            // <Slide {...configBlogSlide} listSlides={listSlides} />
            listSlides.length > 0 && (
              <Grid
                padded
                stretched
                style={{ justifyContent: "space-between" }}
              >
                {listSlides &&
                  listSlides.map((sl, idx) => (
                    <Grid.Column
                      mobile={16}
                      tablet={8}
                      computer={5}
                      style={{ alignItems: "center" }}
                      key={idx}
                    >
                      {sl}
                    </Grid.Column>
                  ))}
              </Grid>
            )
          }
          // extra={extra}
        /> */}
        {/* </Grid.Column> */}
        {/* <Grid.Column style={{ padding: "0 0 0 1em" }} padded width={8}>
            <Card
              className="card-home-most"
              centered
              fluid
              header={<h3 style={styleP}>Most views</h3>}
              description={
                <Slide {...configBlogSlide} listSlides={listSlides} />
              }
              extra={extra}
            />
          </Grid.Column> */}
        {/* </Grid> */}
      </Segment>
    </>
  );
}

export async function getStaticProps(context) {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      return {
        props: { data: res.slice(0, 2) },
      };
    });
}
