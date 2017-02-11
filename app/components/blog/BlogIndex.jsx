var React         = require('react'),
    {Link, IndexLink} = require('react-router');

var axios         = require('axios');

class BlogIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            components: [],
        }
    }
    getRecentBlogs = () => {
        var {blogs, components} = this.state;
        axios.get('/blogs/getRecentBlogs')
        .then((result) =>
            //console.log("REcent!!:", result.data)
            this.setState({
                blogs: result.data,
            })
        )
        .then((result) =>
            this.populateBlogsComponents()
        )
    }
    populateBlogsComponents = () => {
        var {blogs, components} = this.state;
        console.log("populate:", blogs);
        blogs.data.forEach(function(el){
            var mainImage = this.getMainImage(el);
            mainImageComponent = mainImage ? <img src={mainImage} alt="" className="src"/> :
                                             <img src="http://www.immersion-3d.com/wp-content/uploads/2015/12/image-placeholder-500x500.jpg" alt=""/>;
            this.setState({
                components: components.concat(
                    <div>
                        <div className="row">
                            <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                                <h3>{el.title}</h3>
                            </div>
                        </div>
                        <div className="row blog-panel">
                            <div className="columns large-12">
                                {mainImageComponent}
                            </div>
                            <div className="columns large-12 panel-child">
                                <p>{el.intro}</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })
        })
        console.log(this.state.components);
    }
    getMainImage = (comp) => {
        var s3bucketUrl = "https://jinblog.s3.amazonaws.com/";
        comp.componentData.values.forEach(function(el){
            if(el.endsWith('.jpg') || el.endsWith('.jpeg') || el.endsWith('.png')){
                return s3bucketUrl+el.value;
            }
        });
        return null;
    }
    componentDidMount = () => {
        var {blogs} = this.state;
        //console.log(this.getRecentBlogs());
        this.getRecentBlogs();
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
                <div className="comps">
                    {this.state.components.map(function(input, index){
                        console.log(input);
                        return input;
                    })}
                </div>
                <div className="row">
                    <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                        <h3>Blog1 title </h3>
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
