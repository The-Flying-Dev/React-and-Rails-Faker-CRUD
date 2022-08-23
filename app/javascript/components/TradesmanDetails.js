import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import LocationCard from './LocationCard';
import AddJob from './AddJob';
import TradesmanForm from './TradesmanForm';


export default function TradesmanDetails() {

  const [{data: tradesman, error, status}, setTradesman] = useState({
      data: null,
      error: null,
      status: "pending"
  })
  const [showEdit, setShowEdit] = useState(false)

  const { id } = useParams()
  
  const fetchTradesman = async () => {
      const res = await fetch(`/tradesmen/${id}`)
      if (res.ok) {
          const trademanJSON = await res.json()
          setTradesman({data: trademanJSON, error: null, status: "resolved"})
      } else {
          const trademanErr = await res.json()
          setTradesman({data: null, error: trademanErr, status: "rejected"})
      }
  }

  //id used in dependency array, as it's being called from the outside
  useEffect(() => {
    fetchTradesman()
        .catch(console.error)
  }, [id])


  function handleAddLocation(newLocation) {
      setTradesman({
        error,
        status,
        data: {
            ...tradesman,
            locations: [...tradesman.locations, newLocation]
        }
      })
  }

  function handleUpdateTradesman(){
      fetchTradesman()
      setShowEdit(false)
  }


  //create javascript variable to hold a single Location Component
  const locationCards = tradesman?.locations.map(l => <LocationCard key={l.id} location={l} />)
  
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return <h2>Error: {error.error}</h2>;
  
  return (
    <div>
        <h2>tradesman Profile:</h2>
        <img src={tradesman.avatar} alt={tradesman.name} />
        <h3>{tradesman.name}</h3>
        <h4>Field of Work: {tradesman.field_of_work}</h4>
        <button onClick={() => setShowEdit(showEdit => !showEdit)}>Edit tradesman</button>
        {showEdit && <TradesmanForm tradesman={tradesman} addTradesman={handleUpdateTradesman} edit={true}/>}
        <hr />
        <h2>Job Locations:</h2>
        <div className="LocationList">
            {locationCards}
        </div>
        <hr />
        <AddJob onAddLocation={handleAddLocation} tradesmanId={tradesman.id} />
        
    </div>
  )
}
