import React, { Fragment } from 'react';
import './App.css';
import firebase from './firebase'
import Auth from './auth'

function App() {
  
  const [entries, setEntries] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('progress_entries').get()
      setEntries(data.docs.map(doc => doc.data()))
    }
    fetchData()
  },[])

  return (
    <>
      <div id='userDetails'></div>
      <Auth />
      <ul>
        {entries.map(entry => (
          <li key = {entry.userID}> {entry.note}</li>
        ))}
      </ul>

    </>
  );
}

export default App;
