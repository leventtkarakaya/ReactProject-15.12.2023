import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./Search";
import Alert from "./Alert";
import User from "./User";
import { BrowserRouter,Route,Routes,Link,NavLink } from "react-router-dom";


export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this)
    this.setAlert = this.setAlert.bind(this)
    this.state = {
      users: [],
      alert: null
    };
  }
  searchUsers(keyword) {
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          this.setState({ users: res.data.items });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 3000);
  }
  clearUsers() {
    this.setState({
      users: []
    })
  }
  setAlert(message) {
    this.setState({
      alert: {
        message
      }
    })
    setTimeout(() => {
      this.setState({
        alert:null
      })
    }, 1000)
  }
  render() {
    return (
      <BrowserRouter>
          <Navbar title="Github Finder" icon="fa-brands fa-github" />
          <Alert alert={this.state.alert} />
          <Routes>
            <Route path="/users" element={<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />} />
            <Route path="/users" element={<Users users={this.state.users} />} />
          </Routes>
          <Routes>
          <Route path="/users" element={<Users users={this.state.users} />} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App;