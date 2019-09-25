import React, { Component } from 'react';

class App extends Component {
  state = {
    students: [
      { name: 'Juan', occupation: 'Mercadologo' },
      { name: 'Karina', occupation: 'Programadora' },
      { name: 'Diego', occupation: 'Clown' }
    ],
    student: {},
    filtered: []
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ students: [...this.state.students, this.state.student] });
  };

  handleInput = (e) => {
    const { student } = this.state;
    const key = e.target.name;
    student[key] = e.target.value;
    this.setState({ student });
  };

  search = (e) => {
    const { value } = e.target;
    const { students } = this.state;
    const query = value.toLowerCase();
    const filtered = students.filter(
      (student) => student.name.toLowerCase().includes(query) || student.occupation.toLowerCase().includes(query)
    );
    this.setState({ filtered });
  };

  render() {
    const { students, filtered } = this.state;
    return (
      <div>
        <h1>Students</h1>
        <input onChange={this.search} type="text" name="search" />
        {filtered.length === 0 &&
          students.map((student, idx) => (
            <div key={idx}>
              <p>{student.name}</p>
              <p>{student.occupation}</p>
            </div>
          ))}
        {filtered.length !== 0 &&
          filtered.map((student, idx) => (
            <div key={idx}>
              <p>{student.name}</p>
              <p>{student.occupation}</p>
            </div>
          ))}
        <form onSubmit={this.onSubmit}>
          <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
          <input onChange={this.handleInput} type="text" name="occupation" placeholder="Occupation" />
          <input type="submit" value="Add Student" />
        </form>
      </div>
    );
  }
}

export default App;
