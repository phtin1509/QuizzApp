import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div className="manage-users-container">
            <div className="title">
                <h1>Manage User</h1>
            </div>
            <div className="users-content">
                <button className="btn btn-primary">Add User</button>
            </div>
            <div className="users-list">
            </div>
            <ModalCreateUser />
        </div>
    )
}

export default ManageUser;