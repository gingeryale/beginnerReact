var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');




var setName;
var setMessage = "hey there";

ReactDOM.render(
    <Greeter name={setName} message={setMessage}/>,
    document.getElementById('app')
);

// var MessageForm = React.createClass({
//   onMessageFormSubmit: function (e) {
//     e.preventDefault();
//
//     var message = this.refs.message.value;
//
//        if(message.length > 0){
//           this.refs.message.value = '';
//           this.props.onNewMessage(message);
//         console.log(message);
//        // alert(name);
//        }
//   },
//   render: function () {
//     return(
//         <form onSubmit={this.onMessageFormSubmit}>
//           <input type="text" ref="message"/>
//           <button>Set Message</button>
//         </form>
//       );
//   }
// });

