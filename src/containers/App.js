import React, { Component } from 'react';
import CardList from '../componets/CardList';
import SearchBox from '../componets/SearchBox';
import './App.css';
import Scroll from '../componets/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfileld: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    
    onSearchChange = (e) => {
        this.setState({searchfileld: e.target.value});
    }

    render(){
        const {robots, searchfileld} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfileld.toLowerCase());
        })
        return !robots.length ?
            <p className='tc'>Ooooh! Looks that you don't have any robot!</p>:
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;