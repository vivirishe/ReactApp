// Pulling the dom into a React component
// takes one argument and options object
// only one root (div) to render the view
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React'
    };
  },
  render: function() {
    var name = this.props.name;

    return (
      <div>
        <h1> Hello {name}! </h1>
        <p>This is from the component</p>
      </div>
    );
  }
});

var firstName = 'Vivi';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
