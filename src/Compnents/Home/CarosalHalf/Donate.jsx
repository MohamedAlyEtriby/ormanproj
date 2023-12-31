import React from "react";
import { Button } from "react-bootstrap";
import "./Donate.css";
const Donate = () => {
  return (
    <div className="formHalf flex-colo align-items-start position-relative">
      <div className="contact flex">
        <p className="contact-info m-0 px-3 py-2"> حقق الحلم !</p>
      </div>
      <div className="w-100 position-relative px-3 py-2 ">
        <p className="title" >بيانات المتبرع</p>
        <form className="form-container">
          <input type="text" name="" id="" placeholder="اسم المتبرع" />
          <input type="text" name="" id="" placeholder="البريد الاليكتروني" />
          <input type="text" name="" id="" placeholder="رقم المحمول" />
          <div className="flex">
            <div>
              <label for="age1">
                {" "}
                <label for="age1">
                  <img src="../../../assets/Logo2.png" alt="" />
                </label>
              </label>
              <input
                type="radio"
                id="age1"
                name="age"
                value="60"
                style={{ width: "fit-content" }}
              />
            </div>
            <div>
              <label for="age2">
                {" "}
                <img src="../../../assets/Master.png" alt="" />
              </label>
              <input
                type="radio"
                id="age2"
                name="age"
                value="100"
                style={{ width: "fit-content" }}
              />
            </div>
            <div>
              <label for="age3">
                <img src="../../../assets/Visa2.png" alt="" />
              </label>
              <input
                type="radio"
                id="age3"
                name="age"
                value="100"
                style={{ width: "fit-content" }}
              />
            </div>
          </div>
          <label style={{ textAlign: "right" }}>
            كم المبلغ المراد المساهمة به ؟
          </label>
          <input type="number" name="" id=""  />

          <div className="text-center">
            <button type="button" className="boton">
              اتبرع الان
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
