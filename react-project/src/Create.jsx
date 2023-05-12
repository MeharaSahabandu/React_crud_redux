import React from "react";

export default function Create() {
  return (
    <div>
      <h1>Create New User</h1>

      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <br /> <br />
        <label>Age</label>
        <input type="text" name="age" />
        <br /> <br />
        <button>Add New User</button>
      </form>
    </div>
  );
}
