import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
