var React         = require('react'),
    {Link, IndexLink} = require('react-router');

class BlogIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
        }
    }
    render(){
        return(
            <div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            <Link to="/blog/new" activeClassName="active-link"><button>new</button></Link>
                            <i className="fi-cloud style2"></i>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                        <h3>Blog1 title</h3>
                    </div>
                </div>
                <div className="row blog-panel">
                    <div className="columns large-12">
                        <img src="http://www.immersion-3d.com/wp-content/uploads/2015/12/image-placeholder-500x500.jpg" alt=""/>
                    </div>
                    <div className="columns large-12 panel-child">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
module.exports = BlogIndex;
