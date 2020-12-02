import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../../JS/actions/contact";
import { editContact } from "../../JS/actions/addContact";
import { Link } from "react-router-dom";
function Contact({ person, s }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src="/userPhoto.jpg" />
        <Card.Header style={{ textAlign: "center" }}>{person.name}</Card.Header>
        <Card.Meta style={{ textAlign: "center" }}>{person.email}</Card.Meta>
        <Card.Description>
          <strong>{person.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/edit/${person._id}`}>
            <Button
              inverted
              color="brown"
              onClick={() => {
                dispatch(getContact(person._id));
                dispatch(editContact());
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            inverted
            color="red"
            onClick={() => dispatch(deleteContact(person._id,s))}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default Contact;
