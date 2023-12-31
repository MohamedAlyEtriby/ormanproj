import React from "react";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { Container, Table } from "react-bootstrap";
import "./Reciept.css";
import RecieptInfo from "./RecieptInfo";
const Reciept = () => {
  const reciept = [
    {
      type: "زكــاة",
      goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
      sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
      value: "1.00",
      Est: "11 من 15",
    },
    {
      type: "زكــاة",
      goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
      sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
      value: "1.00",
      Est: "11 من 15",
    },
    {
      type: "زكــاة",
      goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
      sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
      value: "1.00",
      Est: "11 من 15",
    },
    {
      type: "زكــاة",
      goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
      sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
      value: "1.00",
      Est: "11 من 15",
    },
  ];
  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg">
        <RecieptInfo />
        <Table
          striped
          bordered
          hover
          className="rec"
          style={{ borderRadius: "20px" }}
        >
          <thead>
            <tr className="rowtable">
              <th className="firstth">م</th>
              <th>نـوع التبــرع</th>
              <th>هدف التبرع</th>
              <th>سهـــــم</th>
              <th>قيمة التبرع</th>
              <th className="lastth">عدد الاقساط</th>
            </tr>
          </thead>
          <tbody>
            {reciept.map((item, index) => (
              <tr style={{ textAlign: "right" }} key={index}>
                <td>{index + 1}</td>
                <td>{item.type}</td>
                <td className="colwidth">{item.goal}</td>
                <td className="colwidth">{item.sahm}</td>
                <td>{item.value}</td>
                <td>{item.Est}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Reciept;
