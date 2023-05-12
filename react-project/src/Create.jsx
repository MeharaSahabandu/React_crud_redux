import React , {useState} from "react";
import { addUser } from "./UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, age);
        dispatch(addUser({id: users[users.length-1].id+1,name, age}));
    }

  return (
    <div>
      <h1>Create New User</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label>Age</label>
        <input type="text" name="age" onChange={(e) => setAge(e.target.value)} />
        <br /> <br />
        <button>Add New User</button>
      </form>
    </div>
  );
}
