import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';




class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="addtododiv">

        <InputGroup className="mb-3">
        <Form.Control
        onChange={e => this.updateInput(e.target.value)}
        value={this.state.input}
        />
        <Button variant="light" className="add-todo" onClick={this.handleAddTodo}>
        Add Todo
        </Button>
      </InputGroup>


      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
