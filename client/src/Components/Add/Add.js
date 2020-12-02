import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Input, Button } from "semantic-ui-react";
import { postContact, putContact } from "../../JS/actions/contact";
import "./Add.css";
function Add({ s }) {
  const add = useSelector((state) => state.addAndEditReducer.add);
  const dispatch = useDispatch();
  const person = useSelector((state) => state.contactReducer.user);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const mustEdit = useSelector((state) => state.contactReducer.editContact);
  console.log(mustEdit);
  useEffect(() => {
    add ? setUser({ name: "", email: "", phone: "" }) : setUser(person);
  }, [add, person]);
  const handleUser = () => {
    if (add) {
      dispatch(postContact(user, s));
    } else {
      dispatch(putContact(user, person._id, s));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="controll-design">
      <h3>{add ? "Add Name" : "Edit Name"}</h3>
      <Input
        value={user.name}
        icon="users"
        iconPosition="left"
        placeholder="Full Name"
        name="name"
        onChange={handleChange}
      />
      <hr style={{ width: "70%" }} />
      <h3>{add ? "Add Email" : "Edit Email"}</h3>
      <Input
        value={user.email}
        iconPosition="left"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      >
        <Icon name="at" />
        <input />
      </Input>
      <hr style={{ width: "70%" }} />
      <h3>{add ? "Add Phone" : "Edit Phone"}</h3>
      <Input
        value={user.phone}
        placeholder="Phone"
        style={{ width: "17%" }}
        name="phone"
        onChange={handleChange}
      />
      <br />
      <Link to="/">
        <Button style={{ marginTop: "2%" }} onClick={() => handleUser()}>
          {add ? "save" : "edit"}
        </Button>
      </Link>
    </div>
  );
}

export default Add;
