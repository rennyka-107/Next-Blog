import React from "react";
import { Button, Card, Segment } from "semantic-ui-react";

function Error404NotFound() {
  return (
    <Segment className="newest-grid-container" vertical>
      <Card
        className="card-home-news"
        centered
        fluid
        description={
          <section className="page_404">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="col-sm-10 col-sm-offset-1 text-center">
                    <div className="four_zero_four_bg">
                      <h1 className="text-center">404</h1>
                    </div>
                    <div className="contant_box_404">
                      <h3 className="h2">Look like you are lost</h3>
                      <p>the page you are looking for not avaible!</p>
                      <Button
                        className="cool-button"
                        as="a"
                        style={{ fontSize: "1.2em" }}
                      >
                        Go to home
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      />
    </Segment>
  );
}

export default Error404NotFound;
