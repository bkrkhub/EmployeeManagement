import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { MdPersonAdd } from "react-icons/md"; // Post Employee Icon
import "./Header.css"


const Header = () =>{
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="./recruitment.png" // Logo dosyasının yolu
                            alt="Logo"
                            style={{ height: "30px", marginRight: "20px" }}
                        />
                        <strong>Employee Management System</strong>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            <HiUsers style={{ marginRight: "8px", fontSize: "18px" }} />
                            Employees
                        </Nav.Link>
                        <Nav.Link as={Link} to="/employee" className="nav-link">
                            <MdPersonAdd style={{ marginRight: "8px", fontSize: "18px" }} />
                            Post Employee
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;