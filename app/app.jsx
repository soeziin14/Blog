var React         = require('react'),
    ReactDOM      = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main         = require('Main'),
    BlogIndex    = require('BlogIndex'),
    NewBlog      = require('NewBlog'),
    ShowBlog     = require('ShowBlog'),
    About        = require('About'),
    Login        = require('Login');
// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')
//require('script!Foundation')

hashHistory.push('about');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/blog" component={BlogIndex}></Route>
                <Route path="/blog/new" component={NewBlog}></Route>
                <Route path="/blog/show/:id" component={ShowBlog}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
