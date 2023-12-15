import React, { Component } from "react";

class User extends Component {
    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className="grid grid-cols-6 md:grid-cols-4 gap-4">
                <div className="col-span-2 md:col-span-1">
                    <div>
                        <div>
                            <img src={avatar_url} alt="" className="w-full" />
                        </div>
                        <div className="mt-2">
                            <h5 className="text-white">{login}</h5>
                            <a href={html_url} className="px-2 py-1 bg-blue-500 rounded-lg text-white">
                                Go Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default User;