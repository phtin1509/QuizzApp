import React, { useState } from 'react';


const TableUser = (props) => {
    const { listUser } = props;


    return (
        <>
            <table className="table table-dark table-hover table-bordered mt-3" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-primary mx-3">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUser && listUser.length === 0 && <tr>
                        <td colSpan={5}>Not Found</td>
                        </tr>}

                    </tbody>
            </table>
        </>)
}

export default TableUser;