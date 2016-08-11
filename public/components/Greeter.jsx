var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React!',
            message: 'This is from Component...'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewName: function (updates) {
        this.setState(updates);
    },
    // handleNewMessage: function (message) {
    //     this.setState({
    //       message: message
    //     });
    // },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>

                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
                {/*<MessageForm onNewMessage={this.handleNewMessage}/>*/}
            </div>
        );
    }
});



module.exports = Greeter;