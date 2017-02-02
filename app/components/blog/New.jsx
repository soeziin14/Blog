var React         = require('react');
var Tabs          = require('Tabs'),
    ImageUpload   = require('ImageUpload');

class NewBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 1,
            images: [],
        }
    }
    newBody = () => {
        var content = $('<div className="column small-6 large-6 text-center"></div>'+
                        '<textarea name="" id="" cols="30" rows="10"></textarea>'+
                        '<hr />');
        $(this.refs.container).append(content);
    }
    newImage = () => {
        const images = this.state.images;
        this.setState({
            images: images.concat(<ImageUpload key={images.length}></ImageUpload>),
        })
    }
    handleToggleTab = (activeTab) => {
        this.setState = () => ({
            activeTab: activeTab,
        });

    }
    render(){
        var today = new Date().toISOString().slice(0, 10).replace(/-/g,"-");
        var {activeTab} = this.state;

        return(
            <div>
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
                        {this.state.images.map(function(input, index){
                            return input;
                        })}
                    </div>
                    <hr/>
                </div>
                <div className="new-button">
                    <button onClick={this.newBody}>Body</button>
                    <button onClick={this.newImage}>Image</button>
                </div>
            </div>
        )
    }
}
module.exports = NewBlog;
