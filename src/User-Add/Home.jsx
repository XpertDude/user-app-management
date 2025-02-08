import NavBar from "./NavBar";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
export default function Home() {
    return <>
        <NavBar />
        <Container className="mt-5">
            <Card className="p-2">
                <h1>Welcome to User Management App</h1>
                <p>
                    Manage users, add new users, and customize user types with ease.
                </p>
                <p>
                    <Link to="/add-user">
                        <Button variant="primary">Manage Users</Button>
                    </Link>
                </p>
            </Card>
            <Row className="my-4">
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                        <i className="bi bi-people-fill fs-1 text-primary"></i>
                        <Card.Title className="text-primary">Manage Users</Card.Title>
                            <Card.Text>
                                View, edit, and delete users in your app. Keep your user base organized.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                        <i className="bi bi-person-fill-add fs-1 text-primary"></i>
                            <Card.Title className="text-primary">Add a New User</Card.Title>
                            <Card.Text>
                                Easily add new users to the system and assign them specific roles.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                        <i className="bi bi-info-lg fs-1 text-primary"></i>
                        <Link to="/about" className="text-decoration-none"><Card.Title>About the App</Card.Title></Link>
                            <Card.Text>
                                Learn more about the features and how this User Management app can help you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}