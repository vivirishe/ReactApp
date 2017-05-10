// Pulling the dom into a React component
// takes one argument and options object
// only one root (div) to render the view 
var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1> React! </h1>
        <p>This is from the component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
