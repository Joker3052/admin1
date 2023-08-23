// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate thay thế useHistory
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // Sử dụng useNavigate thay thế useHistory

  const handleLogin = () => {
    // Thực hiện xác thực và cập nhật trạng thái đăng nhập.
    // Ở đây, chúng ta sử dụng Context API để giả lập trạng thái đăng nhập.
    login();
    navigate('/dashboard'); // Sử dụng navigate thay thế history.push
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
