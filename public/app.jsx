// Pulling the dom into a React component
// takes one argument and options object
// only one root (div) to render the view
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      contentMessage: 'This is from the component'
    };
  },
  render: function() {
    var name = this.props.name;
    // var contentMessage = this.props.contentMessage;

    return (
      <div>
        <h1> Hello {name}! </h1>
        <p>{contentMessage}</p>
      </div>
    );
  }
});

var firstName = 'Vivi';
var contentMessage = 'This is kinda cool.';

ReactDOM.render(
  <Greeter name={firstName} message={contentMessage}/>,
  document.getElementById('app')
);
