import { useRouter } from "next/router";
import React from "react";
import {
  Card,
  Divider,
  Image,
  Segment,
  Container,
} from "semantic-ui-react";

function Blogs() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "router");
  return (
    <Segment className="newest-grid-container" vertical>
      <Card
        className="card-home-news"
        centered
        fluid
        header={
          <Divider
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <h2>Case Studies</h2>
          </Divider>
        }
        description={
          <Container text>
            <p>
              This is a basic fixed menu template using fixed size containers.
            </p>
            <p>
              A text container is used for the main container, which is useful
              for single column layouts.
            </p>

            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <Image src="/images/head-img.png" style={{ marginTop: "2em" }} />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus
            </p>
          </Container>
        }
        extra={<p style={{ textAlign: "right"}}>Author: Leona</p>}
      />
    </Segment>
  );
}

export default Blogs;
