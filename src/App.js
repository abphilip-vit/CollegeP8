import Map from './components/Map.js';
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Column from './components/Column'
import axios from 'axios';
import firebase from './Firebase';

function App() {

  //const [eventData, setEventData] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // const fetchEvents = async () => {
    //   const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    //   const { events } = await res.json()
    //   setEventData(events)
    // }
    // fetchEvents()
    // console.log(eventData);
//     axios.defaults.baseURL = 'https://tarp-project-ee72f-default-rtdb.firebaseio.com/';

// axios.get('https://tarp-project-ee72f-default-rtdb.firebaseio.com/coordinate.json').then(responses => {
//   let event = responses.data;
//   console.log(event);
//   setEventData(event);
//   console.log(eventData); 
//   console.log(1);

  const todoRef = firebase.database().ref('coordinate');
      todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        console.log(todos);
        const todoList = [];
        for(let i = 1; i < todos.length; i++){
        const cd = todos[i].split(",");
        cd[0] = parseFloat(cd[0]);
        cd[1] = parseFloat(cd[1]);
        todoList.push(cd);
      }
        console.log(todoList);
       setTodoList(todoList);
      });
      todoList.map((todo, i) => console.log(todo));
    }, []);

  return (
    <div className="App">
      <Header />
      <Map eventData={todoList}/>
      <Column eventData={todoList}/>
    </div>
  );
}

export default App;
