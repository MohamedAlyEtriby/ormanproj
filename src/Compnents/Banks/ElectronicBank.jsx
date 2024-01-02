import React from "react";
import { Table, Container, Image } from "react-bootstrap";
import { Bank } from "../../BankData";
import './ElectronicBank.css'

const BankTable = ({ bankData }) => {
  return (
    <Container>
      <div className="table-responsive">
        <Table striped bordered hover style={{ background: "white" }}>
        
          <tbody className="ulbanks">
            {Bank.map((item, index) => (
              <React.Fragment key={index}>
                <tr style={{ height: "10rem" }}>
                  <td rowSpan={2} className="align-middle">
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={`Image ${index + 1}`}
                        style={{ width: "25rem", height: "6.7rem" }}
                      />
                    )}
                  </td>
                  <td>
                    <ul className="m-0 px-3 " >
                      <li className="textright">
                        رقم الحساب بالجنيه المصري: {item.rkmhsabe}
                      </li>
                      <li className="textright">iban: {item.iban1}</li>
                      <li className="textright">
                        رقم الحساب بالدولار: {item.rkmhsabd}
                      </li>
                      <li className="textright">iban: {item.iban2}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="textright">
                  <td className="px-2">
                    <strong>الكود:</strong> {item.code}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default BankTable;
