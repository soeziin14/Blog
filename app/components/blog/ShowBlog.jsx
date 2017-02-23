var React         = require('react'),
    {hashHistory} = require('react-router');

var axios         = require('axios');

class ShowBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            intro: "",
            date: "",
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
            var date = new Date(blog.timestamp).toDateString();
            that.setState({
                title: blog.title,
                intro: blog.intro,
                date: date,
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
                       <div key={that.state.components.length} className="component">
                           <div className="colums large-12 text-center">
                               {imageComponent}
                           </div>
                       </div>
                   )
               });
           }
           else{
               var count = 0;
                console.log("body length", el.length);
                for(var i=0; i<el.length; i++){
                    if(el[i] == '\n'){
                        count++;
                    }
                }
                console.log("how many break:", count);
               that.setState({
                   components: that.state.components.concat(
                       <div key={that.state.components.length} className="columns small-12-collapse medium-12-collapse large-12-collpase component">
                           <textarea rows={count+1} readOnly>
                               {el}
                           </textarea>
                           <hr/>
                       </div>
                   )
               })
           }
       })
    }
    render(){
        console.log(this.props.location);
        return(
            <div>
                <div className="row blog-panel">
                    <div className="row blog-title">
                        <div className="columns small-12-collapse medium-12-collapse large-12-collpase">
                            <h3>{this.state.title}</h3>
                            <h5 className="subheader">by Jin @ {this.state.date}</h5>
                        </div>
                    </div>
                    <p>{this.state.intro}</p>
                </div>
                <div className="components">
                    {this.state.components.map(function(input, index){
                       return input;
                    })}
                </div>
            </div>
        )
    }
}

module.exports = ShowBlog;
