import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "./UserReducer";
import { useDispatch } from "react-redux";

export default function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, age } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uage, setAge] = useState(age);

  const dispatch = useDispatch();

  const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({id, name: uname, age: uage}));
        navigate("/");
    }

  return (
    <div>
      <div>Update</div> <br /> <br />
      <div>
        <form onSubmit={handleUpdate} >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={uage}
            onChange={(e) => setAge(e.target.value)}
          />
          <br /> <br />
          <button>UPDATE</button>
        </form>
      </div>
    </div>
  );
}
