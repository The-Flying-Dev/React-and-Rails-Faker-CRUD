import React, { useState } from 'react'

export default function TradesmanForm(
    //intial tradesmen object
    { 
        addTradesman, 
        tradesman={
            name: '',
            field_of_work: '',
            avatar: ''
        },
        edit
    }
    ) {

    //initial state
    const [formData, setFormData] = useState(tradesman)
    const [errors, setErrors] = useState([])

    //to create new tradesmen object
    async function postTradesman(){
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const res = await fetch("/tradesmen", config)
        if (res.ok) {
            const newTradesman = await res.json()
            addTradesman(newTradesman)
            setFormData({
                name: '',
                field_of_work: '',
                avatar: ''
            })
            setErrors([])
        } else {
            const messages = await res.json()
            setErrors(messages.errors)
        }
    }

    //to update tradesman object
    async function updateTradesman(){
        const updateData = {
            name: formData.name,
            field_of_work: formData.field_of_work,
            avatar: formData.avatar
        }
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }
        const res = await fetch(`/tradesmen/${tradesman.id}`, config)
        if (res.ok) {
            addTradesman()
            setFormData({
                name: '',
                field_of_work: '',
                avatar: ''
            })
            setErrors([])
        } else {
            const messages = await res.json()
            setErrors(messages.errors)
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        if (edit) {
            updateTradesman()
        } else {
            postTradesman()
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


    //form
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>{tradesman.name ? "Edit Tradesman": "Add New Tradesman"}</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="field_of_work">Field of work:</label>
                </div>
                <div>
                    <input
                    type="text"
                    id="field_of_work"
                    placeholder="Enter field of work"
                    value={formData.field_of_work}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar:</label>
                </div>
                <div>
                    <input
                    type="text"
                    id="avatar"
                    placeholder="Enter path to avatar img"
                    value={formData.avatar}
                    onChange={handleChange}
                    />
                </div>
                {errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                    </p>
                ))}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
