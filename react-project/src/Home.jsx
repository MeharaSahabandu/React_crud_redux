import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div>
        {/* add new user button */}
        <button>Add New User</button>
        <br /> <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {/* display data here */}
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    {/* update and delete buttons */}
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
