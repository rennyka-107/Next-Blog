import React, { useEffect, useState } from "react";
import {
  Card,
  Divider,
  Segment,
  Container,
  Form,
  Checkbox,
  Button,
} from "semantic-ui-react";
import CkEditor from "components/CkEditor";
import parse from "html-react-parser";

function Blogs() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

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
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <CkEditor
                onChange={(data) => {
                  console.log(data);
                  setData(data);
                }}
                data={data}
                editorLoaded={editorLoaded}
              />
              <Button
                type="submit"
                className="cool-button"
                style={{ marginTop: "1.5rem" }}
              >
                Submit
              </Button>
            </Form>
            <Divider />
            <h2>Render here:</h2>
            {parse(data)}
          </Container>
        }
        extra={<p style={{ textAlign: "right" }}>Author: Leona</p>}
      />
    </Segment>
  );
}

export default Blogs;
