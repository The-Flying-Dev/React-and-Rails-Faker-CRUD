import React, {useState, useEffect} from 'react'

function AddJob({ onAddLocation, tradesmanId}) {

    const [formData, setFormData] = useState({
        name: '',
        location_id: ''
    })
    const [locations, setLocations] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
      const fetchLocations = async () => {
          const res = await fetch('/locations')
          const locationArr = await res.json()
          setLocations(locationArr)
      }
    
      fetchLocations()
        .catch(console.error)
    }, [])

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        const newJob = {
            name: formData.name,
            tradesman_id: tradesmanId,
            location_id: Number(formData.location_id)
        }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        }
        const res = await fetch('/jobs', config)
        if (res.ok) {
            const locationJson = await res.json()
            onAddLocation(locationJson)
            setFormData({
                name: '',
                location_id: ''
            })
            setErrors([])
        } else {
            const messages = res.json()
            setErrors(messages.errors)
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Job</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location_id">location</label>
                <select
                id="location_id"
                value={formData.location_id}
                onChange={handleChange}
                >
                <option value="">Select location...</option>
                {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                    {location.name}
                    </option>
                ))}
                </select>
            </div>
            {errors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                {err}
                </p>
            ))}
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddJob;