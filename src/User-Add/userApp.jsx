import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { AddUser } from './AddUser';
import appContext from './appContext';
import { UserEdit } from './userEdit';
import { Modal, ModalTitle, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import NavBar from './NavBar';
export default function Users() {
    const [errors, setError] = useState({});
    const [isToEdit, setIsToEdit] = useState(false);
    const [isToAdd, setIsToAdd] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [showAlert, setShowAlert] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const handleCloseAdd = () => setIsToAdd(false);
    const handleCloseEdit = () => setIsToEdit(false);
    const [users, setUser] = useState([{
        id: 1,
        name: 'John Doe',
        age: 30,
        country: 'USA',
        type: 'admin'
    },
    {
        id: 2,
        name: 'Mark Smith',
        age: 28,
        country: 'Canada',
        type: 'user'
    }
]);
    console.log(showWarning);

    const ClearAllUsers = () => {
        return <>
            <div
                className="alert alert-danger alert-dismissible fade show mx-5" role="alert">
                <button
                title='cancel'
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => {
                        setShowWarning(false);
                    }}
                ></button>
                <strong>Warning</strong> You are about to delete all users!
                <button onClick={() => {
                    setUser([]);
                    setShowWarning(false)
                    }} className="btn btn-danger ms-4">Confirm</button>
            </div>

        </>
    }

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
                    Are you sure you want to delete user <strong className='text-danger'>{currentUser.name}</strong>?
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => {
                        setUser(users.filter(user => user.id !== currentUser.id));
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
            {showAlert && <ConfirmDelete />}
            {showWarning && <ClearAllUsers />}
            {
                users.length > 0 ?
                    <section className='m-5'>
                        <div className='d-flex align-items-center justify-content-between m-2'>
                            <div>
                                {users.length > 0 ? <h5>Users <span className='badge bg-primary'>{users.length}</span></h5> : null}
                            </div>
                            <div className='d-flex gap-1'>
                                <button onClick={() => {
                                    setIsToAdd(true);
                                    setIsToEdit(false);
                                }} type="button" className="btn btn-primary">Add User</button>
                                {users.length > 0 && <button className="btn btn-danger" onClick={() => {
                                    setShowWarning(true);
                                }}>Clear</button>}
                            </div>
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
                                        <th scope="col">Country</th>
                                        <th scope="col">Role</th>
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
                                            <td>{user.type === 'admin' ? <span className='text-warning'>{user.type}</span> :
                                                user.type === 'editor' ? <span className='text-success'>{user.type}</span>
                                                    : <span className='text-black'>{user.type}</span>
                                            }
                                            </td>
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
                    :
                    <section className='m-5'>
                        <div className='d-flex align-items-center justify-content-between m-2'>
                            <div>
                                {users.length > 0 ? <h5>Users <span className='badge bg-primary'>{users.length}</span></h5> : null}
                            </div>
                            <button onClick={() => {
                                setIsToAdd(true);
                                setIsToEdit(false);
                            }} type="button" className="btn btn-primary">Add User</button>
                        </div>
                        <hr />
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
                                <tr>
                                    <td colSpan='5' className='text-center text-danger'>No users found</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
            }
        </appContext.Provider>
    </>
}