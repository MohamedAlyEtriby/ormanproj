import React from "react";
import { Accordion } from "react-bootstrap";
import "./Questions.css";
const Questions = ({ title }) => {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{textAlign:"right"}}>{title}</Accordion.Header>
        <Accordion.Body>
          جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى،
          وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى
          عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل:
          الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
          المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات
          القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
};

export default Questions;
