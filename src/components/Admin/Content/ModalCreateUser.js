import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';

const ModalCreateUser = (props) => {
    const { show, setShow } = props
    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('ADMIN');
        setImage('');
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            setPreviewImage('');
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSaveChanges = async () => {
        const isinvalid = validateEmail(email)
        if (!isinvalid) {
            toast.error('Email is invalid');
            return;
        }
        if (!password) {
            toast.error('Password is required');
            return;
        }


        // call api
        // const data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     image: image
        // }

        

        const data = await postCreateNewUser(email, password, username, role, image);
        console.log('object :>> ', data);
        if (data && data.EC === 0) {
            toast.success('Add user successfully');
            handleClose();
        }
        if (data && data.EC !== 0) {
            toast.error('Add user failed')
        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add User
            </Button> */}

            <Modal show={show} onHide={handleClose}
                size='xl'
                backdrop="static"
                className='modal-create-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select id="inputState"
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload"
                                htmlFor='label-upload'
                            >
                                <FcPlus />
                                Upload File Image</label>
                            <input type="file" id="label-upload" hidden onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                previewImage ? <img src={previewImage} alt='' />
                                    : <span>Image Preview</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveChanges()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default ModalCreateUser;