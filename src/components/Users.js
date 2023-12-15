import React, { Component } from "react";
import User from "./User";

class Users extends Component {
    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {this.props.users.map((user) => (
                        <User user={user} key={user.id} />
                    ))}
                </div>
            );
        }
    }
}

export default Users;
