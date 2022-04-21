import React, { Component } from 'react';
// import Counter from 'components/Caunter/Counter';
// import Dropdown from 'components/Dropdown/Dropdown';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
import TodoList from 'components/TodoList/Todolist';
import Form from 'components/TodoList/form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'learn react', completes: true },
      { id: 'id-2', text: 'find out work', completes: false },
      { id: 'id-3', text: 'enjoy work a nd salary', completes: false },
      { id: 'id-4', text: 'dane', completes: true },
    ],
    inputValue: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHander = data => {
    console.log(data);
  };
  // hendelInputChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ inputValue: event.currentTarget.value });
  // };
  // hendelNameChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completes ? total + 1 : total),
      0
    );
    return (
      <>
        <h1>Are you dane?</h1>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.hendelInputChange}
        ></input>

        <div>
          <span>tottal: {totalTodoCount}</span>
          <span>tottal done: {completedTodos}</span>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <Form onSubmit={this.formSubmitHander} />
        <Form onSubmit={this.formSubmitHander} />
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <>
//       <Counter initialValue={0} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />

//     </>
//   );
// };
export default App;
