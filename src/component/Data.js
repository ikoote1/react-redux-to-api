import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
    const {users} = useSelector((state) => state.user)
    return(
        <div>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    )
}