var React       = require('react');

class TextArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <hr/>
            </div>
        )
    }
}

module.exports = TextArea;
