import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../Components/Contact/Contact";
import { getContacts } from "../../JS/actions/contact";
import "./Home.css"
function Home() {
  const person = useSelector(state => state.contactReducer.contact)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContacts());
  },[]);
  return (
    {
    <div className="contacts_design">
      {person.map((el)=><Contact key={el._id} person={el} />)}
    </div>
    }
  );
}

export default Home;
