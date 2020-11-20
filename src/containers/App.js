import React, { useState, useEffect } from 'react';
import CardList from '../componets/CardList';
import SearchBox from '../componets/SearchBox';
import './App.css';
import Scroll from '../componets/Scroll';

function App() {
    const [robots, setRobot] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobot(users));
    }, [])
    
    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
        <p className='tc'>Ooooh! Looks that you don't have any robot!</p>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );

}

export default App;