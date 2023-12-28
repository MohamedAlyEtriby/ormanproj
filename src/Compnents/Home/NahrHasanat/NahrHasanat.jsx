import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NahrHasanat.css";
const NahrHasanat = () => {
  return (
    <div style={{ maxWidth: "44rem", margin: "auto", textAlign: "right" }} className="nahr py-2">
      <Container fluid="md">
        <Row>
          <Col md={6} sm={6} xs={12}>
            <h2 style={{fontWeight:"700"}}>
             <span style={{color:"#0C6A2C"}}>نهر.. </span>
             <span style={{color:"#8DC540"}}>الحسانات</span>
            </h2>
            <p className="m-0" style={{color:"#8E8E8E"}}>
              بعطاء واحد تساهم في مشاريع متعددة ونهر من الحسنات كتوزيع المصاحف و
              كفالة الدعاة وكفالة المعتمرين و سقيا الماء بالاضافة الى مشاريع
              أخر،ساهم الان
            </p>
          </Col>
          <Col
            md={6}
            sm={6}
            xs={12}
            className="flex-colo justify-content-around"
            style={{minHeight:"8rem"}}
          >
            <div className="flex justify-content-between align-items-center w-100">
              <div className="px-4 py-2 nahrrkm">50</div>
              <div className="px-4 py-2 nahrrkm">100</div>
              <div className="px-4 py-2 nahrrkm">150</div>
              <div className="px-4 py-2 nahrrkm">200</div>
            </div>
            <div className="w-100">
              <form className="w-100 flex  " style={{ height: "3rem" }}>
                <div style={{ flexGrow: "1" }}>
                  <div className="w-100 h-100 ">
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="inputt h-100"
                      placeholder="اي مبلغ"
                    />
                  </div>
                </div>
                <div
                  className="h-100 "
                  style={{ flexGrow: "5", marginRight: "0.7rem" }}
                >
                  <button className="h-100 w-100 btnn">اتبرع الان</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NahrHasanat;
