import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock" }}
      >
        <div className="row">
          <div className="col-lg-2">
            {" "}
            <div className="wrapper">
              <input type="file" className="my_file" />
            </div>
          </div>
          <div className="col-lg-10">
            <ul
              className="list-unstyled"
              style={{ float: "right", textAlign: "right", marginTop: "25px" }}
            >
              <li>الاسم</li>
              <li>الموبايل</li>
              <li>المهنة</li>
              <li>الرات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
