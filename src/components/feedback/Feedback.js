import React, { Component } from 'react';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Khai báo trạng thái để lưu trữ dữ liệu từ API
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/image/all')
      .then(response => response.json())
      .then(data => {
        // Lưu dữ liệu từ API vào trạng thái
        this.setState({ data: data });
      })
      .catch(error => {
        console.error('Lỗi khi gọi API:', error);
      });
  }

  render() {
    const { data } = this.state; // Truy cập dữ liệu từ trạng thái

    return (
      <div className="main">
        <h2>Feedback</h2>
        <p>Customer feedback and comments go here.</p>

        {/* Hiển thị dữ liệu từ API */}
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.image_url}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feedback;
