import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { AddUser } from './AddUser';
import appContext from './appContext';
import { UserEdit } from './userEdit';
import { Modal, ModalTitle, ModalBody, ModalFooter, ModalHeader} from 'react-bootstrap';
import NavBar from './NavBar';
export default function Users() {
    const [errors, setError] = useState({});
    const [isToEdit, setIsToEdit] = useState(false);
    const [isToAdd, setIsToAdd] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAdd = () => setIsToAdd(false);
    const handleCloseEdit = () => setIsToEdit(false);
    const [users, setUser] = useState([{
        id: 1,
        name: 'John Doe',
        age: 30,
        country: 'USA'
    }]);
console.log();

    const ConfirmDelete = () => {
        return <>
        <Modal
            role="alert"
            show={showAlert}
            centered
        >
            <ModalHeader>
                <ModalTitle>Confirm delete</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Are you sure you want to delete <strong className='text-danger'>{currentUser.name}</strong>?
            </ModalBody>
            <ModalFooter>
                <button onClick={() => {
                    setUser(users.filter(user => user.id!== currentUser.id));
                    setIsToEdit(false);
                    setIsToAdd(false);
                    setShowAlert(false);
                }} className="btn btn-danger">Delete</button>
                <button onClick={() => setShowAlert(false)} className="btn btn-secondary">Cancel</button>
            </ModalFooter>
        </Modal>
        </>
    }
    return <>
    <NavBar />
        <appContext.Provider value={{ handleCloseAdd, handleCloseEdit, setError, setUser, errors, users, currentUser, isToAdd, isToEdit }}>
            {isToAdd && <AddUser />}
            {isToEdit && <UserEdit />}
            {showAlert && <ConfirmDelete /> }
            <section className='p-4'>
                <div className='d-flex align-items-center justify-content-between m-2'>
                    <h5>Users <span className='badge bg-primary'>{users.length}</span></h5>
                    <button onClick={() => {
                        setIsToAdd(true);
                        setIsToEdit(false);
                    }} type="button" className="btn btn-primary">Add User</button>
                </div>
                <hr />
                <div
                    className="table-responsive"
                >
                    <table
                        className="table table-secondary"
                    >
                        <thead>
                            <tr>
                                <th scope='col'>User Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">country</th>
                                <th scope="col">Add/Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.country}</td>
                                    <td>
                                        <button title='Edit' type="button" className="btn btn-primary m-2" onClick={() => {
                                            setCurrentUser(user);
                                            setIsToEdit(true);
                                            setIsToAdd(false);
                                        }}><i className="bi bi-pencil-square"></i></button>
                                        <button title='Delete' type="button" className="btn btn-danger m-2" onClick={() => {
                                            setShowAlert(true);
                                            setCurrentUser(user);
                                        }}><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </appContext.Provider>
    </>
}