import { Outlet, Link, useLocation } from "react-router-dom";
import {Container,Nav,Navbar,Dropdown,DropdownButton} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'; // Import thư viện Button từ React Bootstrap
import { useState } from 'react'; // Import useState từ React
import './header.css'; // Liên kết file CSS tùy chỉnh


const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để theo dõi trạng thái đăng nhập
  const [expanded, setExpanded] = useState(false); // State để theo dõi trạng thái mở rộng của Navbar

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    // Thực hiện các logic cần thiết để đăng xuất (xóa token, trạng thái đăng nhập, vv.)
    // Sau đó, đặt lại trạng thái đăng nhập
    // setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" id='navbar-header'>
        <Container>
            <>
              <Navbar.Brand as={Link} to="/">Your Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="navbar-nav" className={expanded ? "show" : ""}>
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={location.pathname === "/" ? "active-link" : ""}
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/customers"
                    className={location.pathname === "/customers" ? "active-link" : ""}
                  >
                    Customers
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/store"
                    className={location.pathname === "/store" ? "active-link" : ""}
                  >
                    Store
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/feedback"
                    className={location.pathname === "/feedback" ? "active-link" : ""}
                  >
                    Feedback
                  </Nav.Link>
                </Nav>
                <DropdownButton id="dropdown-item-button" title="Login">
                  <Dropdown.ItemText>Logged in as User</Dropdown.ItemText>
                  <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
                </DropdownButton>
              </Navbar.Collapse>
            </>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Header;
