var React         = require('react'),
    {hashHistory} = require('react-router');

var axios         = require('axios');

class ShowBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            intro: "",
            components: [],
            componentData: [],
        }
    }
    componentDidMount = () => {
         this.getBlog();
    }
    getBlog = () => {
        //console.log('hey /blog/show/' + this.props.params.id);
        var {title, intro, componentData} = this.state;
        var that = this;
        axios.get('/blogs/show/'+this.props.params.id)
        .then(function(result){
            console.log("result:", result.data);
            var blog = result.data;

            that.setState({
                title: blog.title,
                intro: blog.intro,
                componentData: blog.componentData.values,
            });
        })
        .then(function(){
            that.populateBlogsComponents();
        })
    }
    fetchImageFromS3 = (key) => {
        var url = "https://s3.amazonaws.com/jinblog/" + key;
        return url;
    }
    //how feasible is this? maybe disable user from inputting anythign that ends with .jpg...etc.
    checkIfImage = (str) => {
        if(str.endsWith(".jpg") || str.endsWith(".png") || str.endsWith(".jpeg")){
            return true;
        }
        return false;
    }
    populateBlogsComponents = () => {
       var {componentData, components} = this.state;
       var that = this;
       componentData.forEach(function(el){
            console.log("EL:", el);
           if(that.checkIfImage(el)){
               var image = that.fetchImageFromS3(el);
               var imageComponent = <img src={image} alt="" className="src"/>
               that.setState({
                   components: that.state.components.concat(
                       <div key={that.state.components.length}>
                           <div className="colums large-12">
                               {imageComponent}
                           </div>
                       </div>
                   )
               });
           }
           else{
               that.setState({
                   components: that.state.components.concat(
                       <div key={that.state.components.length}>
                           <div className="columns large-12">
                               <h3>
                                   {el}
                               </h3>
                           </div>
                           <hr/>
                       </div>
                   )
               })
           }
       })
       console.log(this.state.components);
   }
    render(){
        console.log(this.props.location);
        return(
            <div>
                <div className="row">
                    <div className="column small-12 large-12 text-center blog-header">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className="column small-12 large-12 text-center blog-header">
                        <h3>{this.state.intro}</h3>
                    </div>
                    <div className="class column small-12 large-12 text-center blog-header">
                        {this.state.components.map(function(input, index){
                            return input;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ShowBlog;
