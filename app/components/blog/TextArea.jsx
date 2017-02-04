var React       = require('react');

class TextArea extends React.Component{
    constructor(props){
        super(props);
    }
    handleChangeTextBlock = (e) => {
        this.props.onChangeTextBlock(e.target.name, e.target.value, this.props.id);
    }
    render(){
        return (
            <div>
                <textarea ref="textBlock"  onChange={this.handleChangeTextBlock} cols="30" rows="10"></textarea>
                <hr/>
            </div>
        )
    }
}
module.exports = TextArea;
