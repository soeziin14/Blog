var React          = require('react'),
    Navigation     = require('Navigation');

var Main = (props) => {

    return(
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
module.exports = Main;
