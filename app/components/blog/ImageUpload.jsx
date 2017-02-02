var React          = require('react');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
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
    }

    reader.readAsDataURL(file)
  }

  render() {
      console.log("in:", this.props);
    let imagePreviewUrl = this.props.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this.handleNewImage(e)} />
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
ImageUpload.defaultProps = {
    images : {file: '',imagePreviewUrl: ''},
}
module.exports = ImageUpload;
