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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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