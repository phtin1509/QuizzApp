import Sidebar from "./Sidebar";
import "./Admin.scss"
import {FaBars} from "react-icons/fa";
import {useState} from "react";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="sidebar-container">
                <Sidebar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
            </div>
        </div>
    );
}
export default Admin;
