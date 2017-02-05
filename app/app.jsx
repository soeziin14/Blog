var React         = require('react'),
    ReactDOM      = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main         = require('Main'),
    BlogIndex    = require('BlogIndex'),
    NewBlog      = require('NewBlog'),
    Login        = require('Login');
// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')
//require('script!Foundation')

hashHistory.push('blog');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/login" component={Login}></Route>
            <Route path="/blog" component={BlogIndex}></Route>
                <Route path="/blog/new" component={NewBlog}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
