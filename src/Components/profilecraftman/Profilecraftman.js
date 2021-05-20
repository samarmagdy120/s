import React, { useState, useEffect, useContext } from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
import ImageUploader from "react-images-upload";
// import Rating from "../rate/Rating";
import Rate from "../rate/Rate";
import { AuthContext } from "../../context/auth/AuthState";
import { ReviewContext } from "../../context/reviews/reviewState";
import { ImWhatsapp } from "react-icons/im";
import StarPicker from 'react-star-picker';
import Modell from "../model/Modell";
import Loader from '../Loader'

const Profilecraftman = ({ match }) => {
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [comment,setComment]=useState('')

  const { getProfileData, userProfile ,success} =
    useContext(AuthContext);
  const {loading,  addReviews  } =
    useContext(ReviewContext);

  const id = match.params.id;

  useEffect(() => {
    getProfileData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading,ReviewContext,success]);

  console.log(userProfile);

  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  const [rating, setRating] = useState(0);

  // const handleFile = (e) => {
  //   // console.log(e.target.files[0]);
  //   // uploadProfileImage(e.target.files[0]);
  // };

 
  const handleReview=()=>{
    addReviews(id, { text: comment , rating: rating });
  }

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div className="profilecraft">
      {userProfile && userProfile !== null ?
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock", marginTop: "20px" }}
      >
        <div className="row">
          <div className="col-lg-2">
            {userProfile.image !== 'image.jpg' ? 
            <img src={userProfile.image}  alt="" /> :
            <div className="wrapper"></div>}
          </div>
          <div className="col-lg-10">
          
            <ul
              className="list-unstyled"
              style={{ float: "right", textAlign: "right", marginTop: "25px" }}
            >
              <li>الاسم : {userProfile.fname} {" "} {userProfile.lname} </li>
              <li>الموبايل: {userProfile.phone} </li>
              <li>
              <StarPicker value={userProfile.rating}  numberStars={5} />
                           <p style={{ display: "block" }}>Rating - {rating}</p>{" "}
              </li>
             
              <li>عدد التقيمات :  {userProfile.numReviews ? userProfile.numReviews : 0  }</li>
              <li>المهنة : {userProfile.job.name}</li>
              <li>
                <p style={{ display: "inlineBlock" }}>التواصل عبر الواتس اب</p>
                <Modell phone ={userProfile.phone} />
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={e=>setComment(e.target.value)}
            style={{
              marginRight: "12px",
              width: "71%",
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "1px solid #ddd",
            }}
          />
                <StarPicker onChange={onChange} value={rating}  numberStars={5} />
          <button
            style={{
              backgroundColor: "#10375C",
              color: "#fff",
              borderRadius: "4px",
              padding: " 5px 28px",
              fontWeight: "bold",
              marginRight: "13px",
              }}
              onClick={
                handleReview
              }
          >
            اضافة
          </button>
        </div>
        <RateAndComment state={state} id={id} />
      </div>: <Loader />}
    </div>
  );
};

export default Profilecraftman;
