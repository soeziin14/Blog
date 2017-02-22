var React         = require('react'),
    axios         = require('axios'),
    {Link, IndexLink, hashHistory, router} = require('react-router');

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
        var that = this;
        axios.get('/blogs/getRecentBlogs')
        .then(function(result){
            //result is undefined when using promise?? temporarily switched out to callback.
            console.log("REcent!!:", result),
            that.setState({
                blogs: result.data,
            })
        })
        .then((result) =>
            this.populateBlogsComponents()
        )
    }
    fetchImageFromS3 = (key) => {
        var url = "https://s3.amazonaws.com/jinblog/" + key;
        return url;
    }
    // handleGetBlog = (index, e) => {
    //     console.log(index ,e);
    //     //hashHistory.push('/blog/show/'+index);
    //     hashHistory.push('/blog/show/'+index);
    //     // this.context.router.push({
    //     //     pathname: '/blog/show',
    //     //     state: this.state.blogs[index],
    //     // })
    // }
    populateBlogsComponents = () => {
       var {blogs, components} = this.state;
       var that = this;
       blogs.data.forEach(function(el){
           var formattedTime = new Date(el.timestamp).toDateString();
           var mainImage = that.fetchImageFromS3(el.mainImage);
           var mainImageComponent = mainImage !== "" ? <img src={mainImage} alt="" className="src"/> :
                                            <img src="http://www.immersion-3d.com/wp-content/uploads/2015/12/image-placeholder-500x500.jpg" alt=""/>;
           that.setState({
               components: that.state.components.concat(
                   <div key={that.state.components.length}>
                       <div className="row blog-title">
                           <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                               <h3>{el.title}</h3>
                               <h5 className="subheader">by Jin @ {formattedTime}</h5>
                           </div>
                       </div>
                       <div className="row blog-panel">
                           <div className="columns large-12">
                               {mainImageComponent}
                           </div>
                           <div className="columns large-12 panel-child">
                               <p>{el.intro}</p>
                               <div className="blog-more">
                                   <Link to={"/blog/show/"+el.timestamp} activeClassName="active-link">
                                   Continue Reading...
                                   </Link>
                               </div>
                           </div>
                       </div>
                       <hr/>
                   </div>
               )
           })
       })
       console.log(this.state.components);
   }
   componentDidMount = () => {
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
                <div className="blog-panel">
                   <div className="comps">
                       {this.state.components.map(function(input, index){
                           return input;
                       })}
                   </div>
                   <div className="row">
                       <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                           <h3>Blog1 title </h3>
                       </div>
                   </div>
                   <div className="row">
                       <div className="columns large-12">
                           <img src="http://www.immersion-3d.com/wp-content/uploads/2015/12/image-placeholder-500x500.jpg" alt=""/>
                       </div>
                       <div className="columns large-12 panel-child">
                           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                       </div>
                   </div>
                   <hr/>
               </div>
            </div>
        )
    }
}
module.exports = BlogIndex;
