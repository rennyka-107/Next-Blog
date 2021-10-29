import anime from "animejs";
import React, { useEffect, useRef, useState } from "react";
import { Grid, Header, Button, Icon, Item, Label } from "semantic-ui-react";

function NewestBlog() {
  return (
    <>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header textAlign="center" as="h2" content="Newest" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Item.Group style={{ width: "100%" }} divided>
          <Item>
            <Item.Image src="/images/107-tachyon-1.png" />

            <Item.Content>
              <Item.Header as="a">12 Years a Slave</Item.Header>
              <Item.Meta>
                <span className="cinema">Union Square 14</span>
              </Item.Meta>
              <Item.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Read more
                  <Icon name="arrow right" />
                </Button>
                <Label>IMAX</Label>
                <Label icon="globe" content="Additional Languages" />
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src="/images/head-img.png" />

            <Item.Content>
              <Item.Header as="a">My Neighbor Totoro</Item.Header>
              <Item.Meta>
                <span className="cinema">IFC Cinema</span>
              </Item.Meta>
              <Item.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Read more
                  <Icon name="arrow right" />
                </Button>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src="/images/4481677.jpg" />

            <Item.Content>
              <Item.Header as="a">Watchmen</Item.Header>
              <Item.Meta>
                <span className="cinema">IFC</span>
              </Item.Meta>
              <Item.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Read more
                  <Icon name="arrow right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Row>
    </>
  );
}

export default NewestBlog;
