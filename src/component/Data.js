import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
    const {users} = useSelector((state) => state.user)
    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.firstName}</h3>
                    {' '}
                    <h3>{user.lastName}</h3>
                </div>
            ))}
        </div>
    )
}

export default Data