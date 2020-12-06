import './App.css';
import React, { Component } from 'react'
import {CardList} from './components/card-list/card-list.component'
import {SearchBoxComponent} from './components/search-box/search-box-component'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>this.setState({monster:users}))
  }
  handleChange=(e)=>{
    this.setState({
      searchField:e.target.value
    })
  }
  render() {
    const {monster, searchField} = this.state
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
       <SearchBoxComponent placeholder='search Monster' handleChange={this.handleChange}/>
        <CardList monster={filteredMonsters}/>
      </div>
    )
  }
}
