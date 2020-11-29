import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../JS/actions/contact";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts);
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
