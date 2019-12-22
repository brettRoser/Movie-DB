import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('Processing your login request...');
    }
// set HTTPS=true&&npm start
    render() {
        return (
            <form action="https://localhost:44335/api/login" onSubmit={this.handleSubmit} method="post">
                <label>Username:
                    <input name="username" type="text" placeholder="username" />
                </label>
                <br />
                <label>Password:
                    <input name="password" type="password" placeholder="password" />
                </label>
                <br />
                {/* <Button variant="contained" color="primary">
                    Login
                </Button> */}
                <input type="submit" value="Login"></input>
            </form>
        );
    }
}

export default Login;