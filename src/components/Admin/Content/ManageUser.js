import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from 'react';
import TableUser from './TableUser';
import { getAllUsers } from '../../../services/apiService';
import ModalUpdateUser from './ModalUpdateUser';


const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

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

    const handleClickBtnEdit = (user) => {
        setDataUpdate(user);
        setShowModalUpdateUser(true);
    }
    
    const resetDataUpdate = () => {
        setDataUpdate({});
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
                <TableUser listUser={listUser}
                    handleClickBtnEdit={handleClickBtnEdit} />

            </div>
            <ModalCreateUser
                show={showModal}
                setShow={setShowModal}
                fetchListUser={fetchListUser} />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate} 
                fetchListUser={fetchListUser}
                resetDataUpdate={resetDataUpdate}/>
                
        </div>
    )
}

export default ManageUser;