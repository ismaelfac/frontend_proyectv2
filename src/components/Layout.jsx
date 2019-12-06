import React from "react";

const Layout = (props) => {
    const { children } = props;
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">CRUD</span>
            </nav>
            <div className="container">
                <div className="row p-3">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;