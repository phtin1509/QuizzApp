import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from 'react';
import TableUser from './TableUser';
import { getAllUsers } from '../../../services/apiService';

const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUser();
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }
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
                <TableUser listUser={listUser}/>
            </div>
            <ModalCreateUser
            show={showModal}
            setShow={setShowModal}
            fetchListUser={fetchListUser} />
        </div>
    )
}

export default ManageUser;