var React          = require('react');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imagePreviewUrl: '',
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleNewImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        this.props.onNewImage(this.props.id, file, reader.result);
        this.setState({
            imagePreviewUrl: reader.result,
        })
    }
    if(file){
        reader.readAsDataURL(file);
    }
  }

  render() {
    let imagePreviewUrl = this.state.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div className="previewComponent">
            <div onSubmit={(e)=>this._handleSubmit(e)}>
              <input className="fileInput" type="file" onChange={(e)=>this.handleNewImage(e)} />
              <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
            </div>
            <div className="imgPreview">
                {$imagePreview}
            </div>
        </div>
    )
  }
}

module.exports = ImageUpload;
