var React       = require('react');

class Tabs extends React.Component{
    constructor(props){
        super(props);
    }
    onToggleTab(e){
        e.preventDefault();
        console.log(e.target.id, this.refs);
        $(this.refs['panel'+this.props.activeTab]).removeClass('is-active');
        this.props.handleToggleTab(e.target.id);
        $(this.refs['panel'+this.props.activeTab]).addClass('is-active');
    }
    render(){
        return (
            <div>
                <ul className="tabs" data-tabs id="example-tabs" ref="tabs">
                    <li className="tabs-title is-active"><a onClick={this.onToggleTab} id="1" aria-selected="true">Paper</a></li>
                    <li className="tabs-title"><a onClick={this.onToggleTab} id="2">Image</a></li>
                </ul>
                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" ref="panel1">
                        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
                    </div>
                    <div className="tabs-panel" ref="panel2">
                        <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Tabs;
