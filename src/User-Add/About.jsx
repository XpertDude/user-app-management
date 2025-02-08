import NavBar from "./NavBar";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
export default function About() {
    return <>
        <NavBar />
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center">About User Management App</h1>
                    <p className="text-center">
                        This app allows you to easily manage users, add new users, edit existing users, and assign roles such as admin, editor, or user.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>App Purpose</Card.Title>
                            <Card.Text>
                                The User Management app is designed to help administrators efficiently manage their user base. You can easily add, edit, and remove users, as well as assign specific roles and responsibilities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Features</Card.Title>
                            <ul>
                                <li>Manage users: Add, edit, and delete users</li>
                                <li>Assign user roles: Admin, Editor, User</li>
                                <li>Customizable user types and access levels</li>
                                <li>Simple and intuitive user interface</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}