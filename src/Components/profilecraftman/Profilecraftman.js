import React, { useState, useEffect, useContext } from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
import ImageUploader from "react-images-upload";
// import Rating from "../rate/Rating";
import Rate from "../rate/Rate";
import { AuthContext } from "../../context/auth/AuthState";
import { ReviewContext } from "../../context/reviews/reviewState";
import { ImWhatsapp } from "react-icons/im";
import Modell from "../model/Modell";

const Profilecraftman = ({ match }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { uploadProfileImage, getProfileData, userProfile } =
    useContext(AuthContext);
  const { errors, loading, reviews, addReviews, getReviews } =
    useContext(ReviewContext);

  const id = match.params.id;

  useEffect(() => {
    getProfileData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userProfile);

  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  const [rating, setRating] = useState(0);

  const handleFile = (e) => {
    // console.log(e.target.files[0]);
    // uploadProfileImage(e.target.files[0]);
  };
  const handleChange = (e) => {
    addReviews(id, { text: e.target.value, rating: rating });
  };

  return (
    <div className="profilecraft">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock", marginTop: "20px" }}
      >
        <div className="row">
          <div className="col-lg-2">
            <div className="wrapper"></div>
          </div>
          <div className="col-lg-10">
            <ul
              className="list-unstyled"
              style={{ float: "right", textAlign: "right", marginTop: "25px" }}
            >
              <li>الاسم</li>
              <li>الموبايل</li>
              <li>
                <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                <p style={{ display: "block" }}>Rating - {rating}</p>{" "}
              </li>
              <li>المهنة</li>
              <li>
                <p style={{ display: "inlineBlock" }}>التواصل عبر الواتس اب</p>
                <Modell />
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={handleChange}
            style={{
              marginRight: "12px",
              width: "71%",
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "1px solid #ddd",
            }}
          />
          <button
            style={{
              backgroundColor: "#10375C",
              color: "#fff",
              borderRadius: "4px",
              padding: " 5px 28px",
              fontWeight: "bold",
              marginRight: "13px",
            }}
          >
            اضافة
          </button>
        </div>
        <RateAndComment state={state} id={id} />
      </div>
    </div>
  );
};

export default Profilecraftman;
