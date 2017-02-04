var React          = require('react');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imagePreviewUrl: '',
    }
  }
  handleChangeImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        this.props.onChangeImageBlock(this.props.id, file, reader.result);
        this.setState({
            imagePreviewUrl: reader.result,
        });
    }
    if(file){
        reader.readAsDataURL(file);
    }
  }

  render() {

    var imagePreviewUrl = this.state ? this.state.imagePreviewUrl : null;
    var $imagePreview = imagePreviewUrl ? (<img src={imagePreviewUrl} />) : (<div className="previewText">Please select an Image for Preview</div>);

    return (
        <div className="previewComponent">
            <div>
              <input className="fileInput" type="file" onChange={(e)=>this.handleChangeImage(e)} />
            </div>
            <div className="imgPreview">
                {$imagePreview}
            </div>
        </div>
    )
  }
}

module.exports = ImageUpload;
