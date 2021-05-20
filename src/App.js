import Map from './components/Map.js';
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Column from './components/Column'
import axios from 'axios';

function App() {

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // const fetchEvents = async () => {
    //   const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    //   const { events } = await res.json()
    //   setEventData(events)
    // }
    // fetchEvents()
    // console.log(eventData);
    axios.defaults.baseURL = 'https://tarp-project-ee72f-default-rtdb.firebaseio.com/';

axios.get('https://tarp-project-ee72f-default-rtdb.firebaseio.com/coordinate.json').then(responses => {
  let event = responses.data;
  setEventData(event);
  console.log(event);
})

  }, []);



  return (
    <div className="App">
      <Header />
      {/* <Map eventData={eventData}/>
      <Column eventData={eventData}/> */}
    </div>
  );
}

export default App;
