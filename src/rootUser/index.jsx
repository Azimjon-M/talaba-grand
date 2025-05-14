import React from "react";
import { Outlet } from "react-router";

const RootUser = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default RootUser;
