import React from "react";
import Input from "../components/input";
import {RiFileCopyLine} from 'react-icons/ri';
import {FiPhoneCall} from 'react-icons/fi'
import Button from "../components/button";

const Home = () => {

  return (
    <>
      <div>
        <label htmlFor="linkId">Your Call Id</label>
        <input
          type="text"
          name="callId"
          value='ABC-ABC-ABC'
          readOnly = {true}
        />
        <RiFileCopyLine />
      </div>
      <br />
      {/* <Button type="button">Enter user id</Button> */}
      <div>
        <label htmlFor="linkId">Enter Caller Id</label>
        <input
          type="text"
          name="callId"
        />
        <button style={{padding:'5px',width:'30px', height:'30px'}}><FiPhoneCall /></button>
      </div>
    </>
  );
};

export default Home;
