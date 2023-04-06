import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/users/usersSlice";
import { useEffect } from "react";

const Data = () => {
    const {users, isLoading, error} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(123))
    },[]);
    if(isLoading){
        return(
            <h2>Leading......</h2>
        )
    } else if (error) {
        return (
            <div>Error</div>
        )
    } else {
        return(
            <div>
                {users.map((user) => (
                    <div className="names" key={user.login.uuid}>
                        <h3>{user.name.first}</h3>
                        {' '}
                        <h3>{user.name.last}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default Data