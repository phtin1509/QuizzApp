import ModalCreateUser from "./ModalCreateUser";


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
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser;