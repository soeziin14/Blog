var React             = require('react'),
    {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        Jin's Blog
                    </li>
                    <li className="menu-text">
                        <IndexLink to="/about" activeClassName="active-link">About Me</IndexLink>
                    </li>
                    <li className="menu-text">
                        <Link to="/blog" activeClassName="active-link">Blog</Link>
                    </li>
                    <li className="menu-text">
                        <Link to="/projects" activeClassName="active-link">Projects</Link>
                    </li>
                    <li className="menu-text"></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        <Link to="/login" activeClassName="active-link">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
module.exports = Navigation;
