// Pulling the dom into a React component
// takes one argument and options object
var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1> React! </h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
