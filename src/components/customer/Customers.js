import React from "react";
import { Container, Table } from 'react-bootstrap';
import "./Customers.css"; // Import CSS file

function Customers() {
  const customers = [
    { name: "Khách hàng 1", email: "customer1@example.com", phone: "123-456-7890",address:"Nghe AN",mess:"(áo khoác nữ,S,300)" },
    { name: "Khách hàng 2", email: "customer2@example.com", phone: "987-654-3210",address:"Nghe AN",mess:"(áo khoác nam,S,300)" },
    // Thêm dữ liệu khách hàng khác tại đây
  ];

  const totalCustomers = customers.length;

  return (
    <div className="main">
    <Container>
      <h1>Customers List</h1>
      <h4>
        Total number of customers: <span className="total-customers">{totalCustomers}</span>
      </h4>
      <Table striped bordered hover size="sm" >
        <thead >
          <tr>
            <th >Oder</th>
            <th >Name</th>
            <th >Email</th>
            <th >Phone</th>
            <th >Address</th>
            <th>InFo</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.mess}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
}

export default Customers;
