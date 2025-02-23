import { useState } from "react";
import UserForm from "./UserForm";
export default function Practice() {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data); // Store the submitted data
  };

  return (
    <>
      <h1>React Form Submission Example</h1>
      <UserForm onSubmit={handleFormSubmit} />

      {userData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
        </div>
      )}
    </>
  );
}
