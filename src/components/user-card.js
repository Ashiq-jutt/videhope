import React from "react";
import { IMAGE_BASE_URL } from "../utils/constant";

const UserCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{item?.name}</h2>
      </div>
      <div className="card-body">
        <div className="image-container">
          <label>User Selfie</label>
          <br />
          <img
            src={`${IMAGE_BASE_URL}${item?.profile}`}
            alt="User selfie"
            className="image"
          />
        </div>
        <div className="image-container">
          <label>Front Side Id Card</label>
          <br />
          <img
            src={`${IMAGE_BASE_URL}${item?.frontSideIdCard}`}
            alt="Front side of ID card"
            className="image"
          />
        </div>
        <div className="image-container">
          <label>Back Side Id Card</label>
          <br />
          <img
            src={`${IMAGE_BASE_URL}${item?.backSideIdCard}`}
            alt="Back side of ID card"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
