import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from "react-responsive";
import { Navbar, Nav, Container } from "react-bootstrap";
import './styles.css'
export default function NavBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return <>
        {!isMobile ?
            <Navbar className="d-flex justify-content-around align-items-center nav-bar">
                <Link to='/' className="fs-6 text-decoration-none">User App Management</Link>
                <ul
                    className="nav justify-content-around align-items-center p-2 m-2"
                >
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/add-user'>Add User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                </ul>
            </Navbar>
            :
            <Navbar className="menu paths" expand="lg">
                <Container>
                    <Navbar.Brand className="text-white fs-1 title"><Link to='/' className="title">User App Management</Link></Navbar.Brand>
                    <Navbar.Toggle  className="toggle-menu" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/add-user'>Add User</Link>
                        <Link className="nav-link" to='/about'>About</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        }
    </>
}