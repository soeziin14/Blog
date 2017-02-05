var React         = require('react'),
    {hashHistory} = require('react-router');

var TextArea      = require('TextArea'),
    ImageUpload   = require('ImageUpload');

var axios         = require('axios');

class NewBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            intro: "",
            components: [],
            componentData: [],
        }
    }
    addTextBlock = () => {
        const {components, componentData} = this.state;
        this.setState({
            components: components.concat(  <TextArea           key={components.length}
                                                                id={components.length + 1}
                                                                textBlock={componentData[components.length+1]}
                                                                onChangeTextBlock={this.handleChangeTextBlock}
                                            ></TextArea>),
        });
    }
    addImageBlock = () => {
        const {components, componentData} = this.state;
        this.setState({
            components: components.concat(  <ImageUpload        key={components.length}
                                                                id={components.length + 1}
                                                                image={componentData[components.length+1]}
                                                                onChangeImageBlock={this.handleChangeImageBlock}
                                            ></ImageUpload>),
        });
    }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }
    handleChangeIntro = (e) => {
        this.setState({
            intro: e.target.value,
        });
    }
    handleChangeImageBlock = (id, file, url) => {
        var updated = {
            type: 'image',
            file: file,
            url: url,
        }
        var arr = [];
        arr = this.state.componentData.slice();
        arr[id] = updated;
        this.setState({
            componentData: arr,
        });
    }
    handleChangeTextBlock = (name, value, id) => {
        var arr = this.state.componentData.slice();
        arr[id] ={
            type: 'text',
            value: value,
        }
        this.setState({
            componentData: arr,
        });
    }
    onSubmit = () => {

        var form = this.getFormForAWSTable();
        var {title, intro, componentData} = this.state;
        var imageUploadPromise = new Promise(
            function() {
                //make post request
                //upload each images first.
                componentData.forEach(function(el, i){
                    console.log("how many data?", el, i);
                    if(el.type == 'image'){
                        axios.get('/blogs/getSignedAWSUrl', {
                            params: {
                                filename: el.file.name,
                                filetype: el.file.type
                            }
                        })
                        .then(function (result) {
                            //AWS s3 signed url returned from server.
                          var signedUrl = result.data.signedUrl;
                          var options = {
                            headers: {
                              'Content-Type': el.file.type
                            }
                          };
                          return axios.put(signedUrl, el.file, options);
                        })
                        .then(function (result) {
                            //AWS s3 upload success.
                        })
                        .catch(function (err) {
                          //AWS s3 upload failure. don't create new blog? for now.
                          return;
                        });
                    }
                });
            }
        );
        imageUploadPromise.then(
            (function(val){
                axios.post('/blogs/new', form)
                    .then(function(response){
                        console.log("new blog success:", response);
                    })
                    .catch(function(err){
                        console.log("new blog error:", err);
                    });
                hashHistory.push('/blog');
            })()
        );
    }
    getFormForAWSTable = () => {
        var {title, intro, componentData} = this.state;
        var form = {
            title: title,
            intro: intro,
        };
        var comps = [];
        componentData.forEach(function(data){
            if(data){
                if(data.type === 'image'){
                    comps.push({
                        type: 'image',
                        value: data.file.name,
                    })
                }
                else{
                    comps.push({
                        type: 'text',
                        value: data.value,
                    })
                }
            }
        });
        form.data = comps;
        return form;
    }
    render(){
        var today = new Date().toISOString().slice(0, 10).replace(/-/g,"-");

        return(
            <form>
                <div className="row blog-form" ref="container">
                    <div className="column small-12 large-12 text-center blog-header">
                        <h1>New Blog @ {today}</h1>
                    </div>
                    <div className="columns small-12 large-12 text-center blog-header">
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder="Title For Your Blog" required/>
                    </div>
                    <div className="columns small-6-collapse medium-6-collapse large-5-collpase">
                        <textarea value={this.state.intro} onChange={this.handleChangeIntro} cols="30" rows="5" placeholder="Short introduction to what you are about to blog about." required></textarea>
                    </div>
                    <div>
                        {this.state.components.map(function(input, index){
                            return input;
                        })}
                    </div>
                    <hr/>
                </div>
                <div className="new-button">
                    <button type="button" onClick={this.addTextBlock}>Body</button>
                    <button type="button" onClick={this.addImageBlock}>Image</button>
                </div>
                <button type="button" onClick={this.onSubmit}>Let's go</button>
            </form>
        )
    }
}
module.exports = NewBlog;
