import React from "react";
import "./FooterContact.css";
import { Button } from "react-bootstrap";

const FooterContact = () => {
  return (
    <div className="form1">
      <p className="title">تواصل معنا</p>
      <form className="form-container">
        <div className="form-row">
          <input type="text" name="" id="" placeholder="الاســـــــــــــــم" />
          <input type="text" name="" id="" placeholder="رقم المحمول" />
        </div>
        <input type="text" name="" id="" placeholder="البريد الاليكتروني" className="w-100" />
        <input type="text" name="" id="" placeholder="عنوان الرسالة" className="w-100" />
        <textarea
          type="text"
          name=""
          id=""
          placeholder="استفسارك"
          style={{ height: "9re" }}
        />
        <Button
          className="urBtn"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default FooterContact;
