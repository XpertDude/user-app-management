import { useContext, useRef } from "react";
import appContext from "./appContext";
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
export const UserEdit = () => {
    const context = useContext(appContext);
    
    let { currentUser, setError, errors, isToEdit, handleCloseEdit , users} = context;
    const userName = useRef();
    const userAge = useRef();
    const userCountry = useRef();
    const userType = useRef();
    const handleError = (name, age, country, type) => {
        let newErrors = {};
        if (name === '') {
            newErrors.name = 'Please type your name';
        }
        if (!age || isNaN(age) || age < 0) {
            newErrors.age = 'Please type a valid age';
        }
        if (age <= 18) {
            newErrors.age = 'Age must be greater than 18';
        }
        if (country === '') {
            newErrors.country = 'Please select your country';
        }

        const userWithTypeAdmin = users.filter(user => user.type === 'admin');
        if (type === 'admin' && userWithTypeAdmin.length >= 3) {
            newErrors.type = 'You can only add up to 3 admin users';
        }
        const userWithTypeEditor = users.filter(user => user.type === 'editor');
        if (type === 'editor' && userWithTypeEditor.length >= 7) {
            newErrors.type = 'You can only add up to 5 editor users';
        }

        setError(newErrors);

        const hasErrors = Object.keys(newErrors).length > 0;

        return !hasErrors;
    };


    const handleSubmit = () => {
        const name = userName.current.value;
        const age = parseInt(userAge.current.value);
        const country = userCountry.current.value;
        const type = userType.current.value;
        handleError(name, age, country, type)
        if (!handleError(name, age, country, type)) return;
        currentUser.name = name;
        currentUser.age = age;
        currentUser.country = country;
        currentUser.type = type;
        handleCloseEdit()
    }
    return <>
        <Modal show={isToEdit} onHide={handleCloseEdit} centered>
            <ModalHeader closeButton>
                <ModalTitle>Edit User</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="mb-3 d-flex flex-column align-items-center gap-3">
                    <div className='w-75'>
                        <input type="text" className='form-control' placeholder='Full Name' id='name' ref={userName} defaultValue={currentUser.name} />
                        {errors.name && <p className='text-danger'>{errors.name}</p>}
                    </div>
                    <div className='w-75'>
                        <input type="number" className='form-control ' placeholder='Your Age' id='age' ref={userAge} defaultValue={currentUser.age} />
                        {errors.age && <p className='text-danger'>{errors.age}</p>}
                    </div>
                    <div className="mb-3 w-75">
                        <select className="form-select form-select-lg w-100" id='country' ref={userCountry} defaultValue={currentUser.country}>
                            <option value={''}>Select Your City</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Istanbul">Istanbul</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Morocco">Morocco</option>
                            <option value="USA">USA</option>
                        </select>
                        {errors.country && <p className='text-danger'>{errors.country}</p>}
                    </div>
                    <div className="mb-3 w-75">
                            <select className="form-select form-select-lg w-100" id="type" ref={userType} defaultValue={currentUser.type}>
                                <option value={''}>Chose type</option>
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="user">User</option>
                            </select>
                            {errors.type && <p className='text-danger'>{errors.type}</p>}
                        </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button onClick={handleCloseEdit} className="btn btn-secondary">Close</button>
                <button className="btn btn-primary" onClick={() => handleSubmit()} type='submit'>Update</button>
            </ModalFooter>
        </Modal>
    </>
}