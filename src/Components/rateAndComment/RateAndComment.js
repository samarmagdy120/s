import React, { useState, useEffect, useContext } from "react";
import Rate from "../rate/Rate";
import "./RateAndComment.css";
import { ReviewContext } from "../../context/reviews/reviewState";

const RateAndComment = ({ state, id }) => {
  const [comment, setComment] = useState([]);
  const [current, setCurrent] = useState([]);

  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);

  const { errors, loading, reviews, addReviews, getReviews } =
    useContext(ReviewContext);

  useEffect(() => {
    getReviews(id);
  }, []);

  console.log(reviews);

  const handleChange = (e) => {
    setCurrent({ ...comment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setComment({ ...current, current });
  };
  return (
    <div className="RateAndComment">
      <div>
        {/* <form onSubmit={handleChange}>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={handleChange}
          />
        </form> */}

        <ul className="list-unstyled comment-view">
          {reviews.length > 0
            ? reviews.map((item) => (
                <li>
                  <img
                    src={item.userImage}
                    style={{
                      margin: "auto",
                      borderRadius: "50%",
                      width: "43px",
                      textAlign: "center",
                      position: "relative",
                      top: "-41px",
                    }}
                  />
                  <div className="comment">
                    <h3>{item.userName}</h3>
                    <Rate rating={item.rating} />

                    <p>{item.text}</p>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default RateAndComment;
