import React, {Suspense, useState, useEffect} from 'react'
import TradesmanCard from './TradesmanCard'
import TradesmanForm from './TradesmanForm'
import GridLoader from 'react-spinners/GridLoader'


function Dashboard() {

  const [tradesmen, setTradesmen] = useState([]); 

  //async function to get all data for tradesmen(points to controller), then sets the state using the setTradesmen setter function
  useEffect(() => {
    const fetchTradesmen = async () => {
      const response = await fetch('/tradesmen');
      const tradesmenArr = await response.json();
      setTradesmen(tradesmenArr);
    }
    fetchTradesmen()
      .catch(console.error);

  }, []);


  //Adding new Tradesman
  //append new value to end of Array using spread operator
  function handleAddTradesman(newTradesman) {
    setTradesmen(tradesmen => [...tradesmen, newTradesman]);
  }


  //delete a Tradesman
  //returns new array with elements that do not have the id of the deleted element
  function handleDeleteTradesman(id) {
    fetch(`/tradesmen/${id}`, {method: "DELETE"})
    .then(response => {
      if (response.ok) {
        setTradesmen(tradesmen => tradesmen.filter(tm => tm.id != id)) 
      }
    })
  }


  //passing each tradesman item to new component with unique id
  let tradesmanCards = tradesmen.map(tm => <TradesmanCard key={tm.id} tradesman={tm} onDelete={handleDeleteTradesman} />)


  return (
    <>  
      <Suspense fallback={<GridLoader />}>
        <h1>Tradesmen</h1>
        <div>
          {tradesmanCards}
        </div>
      </Suspense>
      <hr />
      <TradesmanForm addTradesman={handleAddTradesman} edit={false} />
    </>
  );
}


export default Dashboard;
