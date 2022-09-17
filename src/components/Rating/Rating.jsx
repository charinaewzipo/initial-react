import React from "react";
import "./rating.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RatingEl = () => {
  return (
    <div className="ratingContainer">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h4>What the say</h4>
          <h2>What Our Customers Say About Us</h2>
        </div>
        <div className="card">
          <div className="item">
            <div className="info">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="username">
                <h4>Naura Silvana</h4>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingEl;
