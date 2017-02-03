var React         = require('react'),
    {hashHistory} = require('react-router');
var TextArea      = require('TextArea'),
    ImageUpload   = require('ImageUpload');

class NewBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 1,
            imageComponents: [],
            images: [],
            bodyComponents: [],
            bodies: [],
        }
    }
    newBody = () => {
        // var content = $('<div className="column small-6 large-6 text-center"></div>'+
        //                 '<textarea name="" id="" cols="30" rows="10"></textarea>'+
        //                 '<hr />');
        //$(this.refs.container).append(content);
        const {imageComponents, id} = this.state;
        this.setState({
            imageComponents: imageComponents.concat(<TextArea key={imageComponents.length}></TextArea>),
            id: id+1,
        })
        console.log(this.state.id);
    }
    newImage = () => {
        const {imageComponents, images, id} = this.state;
        this.setState({
            imageComponents: imageComponents.concat(<ImageUpload id={imageComponents.length + 1}
                                                                 images={images}
                                                                 onNewImage={this.handleNewImage}
                                                                 key={imageComponents.length}
                                                    ></ImageUpload>),
        });
    }
    handleNewImage = (id, file, url) => {
        var updated = {
            id: id,
            file: file,
            url: url,
        }
        console.log(id, this.state.images.length);
        var arr = [];
        if(this.state.images.length < id){
            arr = this.state.images.slice();
            arr.push(updated);
            this.setState({
                images: arr,
            })
        }
        else{
            this.state.images.forEach(function(el){
                if(el.id === id){
                    arr[id] = updated;
                }
                else{
                    arr[el.id] = el;
                }
            })
            this.setState({
                images: arr,
            });
        }
        console.log('???',this.state.images, this.state.images.length);
    }
    handleToggleTab = (activeTab) => {
        this.setState = () => ({
            activeTab: activeTab,
        });

    }
    onSubmit = () => {
        //make post request
        hashHistory.push('/');
    }
    render(){
        var today = new Date().toISOString().slice(0, 10).replace(/-/g,"-");
        var {activeTab} = this.state;

        return(
            <form onSubmit={this.onSubmit}>
                <div className="row blog-form" ref="container">
                    <div className="column small-12 large-12 text-center blog-header">
                        <h1>New Blog @ {today}</h1>
                    </div>
                    <div className="columns small-12 large-12 text-center blog-header">
                        <input type="text" placeholder="Title For Your Blog"/>
                    </div>
                    <div className="columns small-6-collapse medium-6-collapse large-5-collpase">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        {this.state.imageComponents.map(function(input, index){
                            return input;
                        })}
                    </div>
                    <hr/>
                </div>
                <div className="new-button">
                    <button type="button" onClick={this.newBody}>Body</button>
                    <button type="button" onClick={this.newImage}>Image</button>
                </div>
                <button type="submit">Let's go</button>
            </form>
        )
    }
}
module.exports = NewBlog;
