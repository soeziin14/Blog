var Auth0Lock         = require('auth0-lock'),
    React             = require('react'),
    {browserHistory}  = require('react-router');

class AuthService extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: null,
        }
    }
    handleLogIn = (user) => {
        this.setState({
            isLoggedIn: true,
            username: user.username,
        })
    }
    handleLogOut = () => {
        this.setState({
            isLoggedIn: false,
            username: null,
        })
    }
}
module.exports = AuthService;
