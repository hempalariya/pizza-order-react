import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { createUser } from "./userSlice";

export default function RegisterUser() {
  const [userName, setuserName] = useState("");


  const dispatch = useDispatch()
  return (
    <div className="mt-15 text-lg">
      <p>Welcome! Please Start by telling us your name:</p>
      <form action="" onSubmit = {(e) => {
        e.preventDefault()
        dispatch(createUser(userName))
      }} className="flex flex-col items-center mt-8">
        <input
          type="text"
          className="bg-yellow-100 outline-none px-2 py-2 mb-4"
          placeholder="Your full name "
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />

        {userName !== "" && <Button>Create User</Button>}
      </form>
    </div>
  );
}
