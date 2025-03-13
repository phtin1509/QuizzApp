import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from 'react';
import TableUser from './TableUser';

const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="manage-users-container">
            <div className="title">
                <h1>Manage User</h1>
            </div>
            <div className="users-content">
                <button className="btn btn-primary"
                onClick={() => setShowModal(true)}> <FcPlus /> Add New User</button>
            </div>
            <div className="users-list">
                <TableUser />
            </div>
            <ModalCreateUser show={showModal} setShow={setShowModal} />
        </div>
    )
}

export default ManageUser;