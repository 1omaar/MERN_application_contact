import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../Components/Contact/Contact";
import { getContacts } from "../../JS/actions/contact";
import { LinearProgress } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import { addContact } from "../../JS/actions/addContact";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ s }) {
  const person = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.contactReducer.loadContacts);
  useEffect(() => {
    dispatch(getContacts(s));
  }, [s]);
  return (
    <div>
      <Link to="/add">
        <Button color="green" onClick={() => dispatch(addContact())}>
          Add Contact
        </Button>
      </Link>
      {load ? (
        <div>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <div className="contacts_design">
          {person.map((el) => (
            <Contact s={s} key={el._id} person={el} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
