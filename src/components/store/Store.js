import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const imagesData = [
  { id: 1, img_name: 'Hình 1', img_url: 'images/img11.jpg' },
  { id: 2, img_name: 'Hình 2', img_url: 'images/img14.jpg' },
  { id: 3, img_name: 'Hình 1', img_url: 'images/img11.jpg' },
  { id: 4, img_name: 'Hình 2', img_url: 'images/img14.jpg' },
  { id: 5, img_name: 'Hình 1', img_url: 'images/img11.jpg' },
  { id: 6, img_name: 'Hình 2', img_url: 'images/img14.jpg' },
  { id: 7, img_name: 'Hình 1', img_url: 'images/img11.jpg' },
  { id: 8, img_name: 'Hình 2', img_url: 'images/img14.jpg' },
  { id: 8, img_name: 'Hình 2', img_url: 'images/img14.jpg' },
  // Thêm các dữ liệu ảnh khác tại đây
];

function Store() {
  const itemsPerRow = 4; // Số ảnh trên mỗi dòng
  const rows = [];

  for (let i = 0; i < imagesData.length; i += itemsPerRow) {
    const rowItems = imagesData.slice(i, i + itemsPerRow);

    const row = (
      <Row key={i}>
        {rowItems.map((image) => (
          <Col key={image.id} md={3}> {/* md={3} để hiển thị 4 cột trên mỗi dòng */}
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={image.img_url} alt={image.img_name} />
              <Card.Body>
                <Card.Title>{image.img_name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );

    rows.push(row);
  }

  return (
    <div className="main">
    <Container>
      <h1>Danh sách ảnh</h1>
      <ListGroup>
        {rows.map((row, index) => (
          <ListGroup.Item key={index}>
            {row}
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Container>
    </div>
  );
}

export default Store;
