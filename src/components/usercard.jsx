// write the component code here
import React from "react";


const Usercard = () => {
  // Static user details
  const profilePhoto = "./src/assets/myphoto.jpg";
  const name = "Jandy Roach";
  const email = "jandyroachy@gmail.com";
  const phone = "1234567890";
  const address = "1234 Main St, City, State, 12345";

  return (
    <div className="profile-info">
      <img
        src={profilePhoto}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
};

export default Usercard;
