import React, { useState } from 'react';
import './App.css';
import pizza1 from './img/pizza1.png';
import pizza2 from './img/pizza2.png';
import pizza3 from './img/pizza3.png';

function App() {
    const [missions, setMissions] = useState([
        { name: "Italian Pizza", price: 10, id: 1, image: pizza1, isVisible: true },
        { name: "Hawaiian Pizza", price: 12, id: 2, image: pizza2, isVisible: true },
        { name: "Slice Pizza", price: 8, id: 3, image: pizza3, isVisible: true }
    ]);

    const [visibleImages, setVisibleImages] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleAddTask = (id, price) => {
        const clickedMission = missions.find(mission => mission.id === id);
        if (clickedMission) {
            setVisibleImages(prev => [...prev, clickedMission]);
            setTotalPrice(prev => prev + price); 
        }
    };

    const calculateTotalPrice = () => {
        return totalPrice;
    };

    const DivVisibility = () => {
        setIsDivVisible(prev => !prev);
    };

    return (
        <div className='container'>
            {missions.map(mission => (
                mission.isVisible &&
                <div className='divv' key={mission.id}>
                    <img className='img' src={mission.image} alt={`pizza ${mission.id}`} />
                    <div>{mission.name}</div>
                    <div>{`$${mission.price}`}</div>
                    <button onClick={() => handleAddTask(mission.id, mission.price)}>Add Task</button>
                </div>
            ))}
            <br />
            {isDivVisible && (
                <div className='divmain'>
                    {visibleImages.map((image, index) => (
                        <img className='divmainimg' key={index} src={image.image} alt={`pizza ${image.id}`} />
                    ))}
                    <div>Total Price: ${calculateTotalPrice()}</div>
                </div>
            )}
            <button className='hidebtn' onClick={DivVisibility}>+</button>
        </div>
    );
}

export default App;
