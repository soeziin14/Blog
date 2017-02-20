var React                 = require('react'),
    {hashHistory}         = require('react-router'),
    axios                 = require('axios'),
    AuthService           = require('AuthService');

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: "",
            form: {
                username: "",
                password: "",
            }
        }
    }
    handleLogIn = (e) => {
        axios.post('/blogs/login', {
            params: {
                form: this.state.form,
            }
        })
        .then(function(result) {
            console.log("Logged In.")
            AuthService.handleLogIn(result)
            hashHistory.push('/blog')
        })
        .catch((err) =>
            this.setState({
                error: err,
            })
        )
    }
    handleChangeID = (e) => {
        this.setState({
            form: {
                username: e.target.value,
            }
        });
    }
    handleChangePW = (e) => {
        this.setState({
            form: {
                password: e.target.value,
            }
        });
    }
    render() {
        return(
            <div className="large-3 large-centered columns">
              <div className="login-box">
                  <div className="row">
                      <div className="large-12 columns">
                        <form onSubmit={handleLogIn}>
                           <div className="row">
                             <div className="large-12 columns">
                                 <input type="text" name="username" onChange={this.handleChangeID} placeholder="Username" />
                             </div>
                           </div>
                          <div className="row">
                             <div className="large-12 columns">
                                 <input type="password" name="password" onChange={this.handleChangePW} placeholder="Password" />
                             </div>
                          </div>
                          <div className="row">
                            <div className="large-12 large-centered columns">
                              <input type="submit" className="button expand" value="Log In"/>
                            </div>
                          </div>
                        </form>
                      </div>
                </div>
            </div>
        </div>
        )
    }
}

module.exports = Login;
