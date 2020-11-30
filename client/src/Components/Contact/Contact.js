import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
function Contact({person}) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/userPhoto.jpg"
        />
        <Card.Header>{person.name}</Card.Header>
  <Card.Meta>{person.email}</Card.Meta>
        <Card.Description>
          <strong>{person.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button  inverted color='green'>
            Edit
          </Button>
          <Button inverted color='red' >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default Contact;
