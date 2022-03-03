import React, {useState} from 'react';

function App() {

    const [personInfo, setPersonInfo] = useState({
        firstName: '', 
        lastName: '', 
        email: '',
        comment: '',
        isBored: false,
        employment: '',
        favColor: ''
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setPersonInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(personInfo)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                className='input'
                name='firstName' 
                type='text' 
                placeholder='first name' 
                onChange={handleChange}
                value={personInfo.firstName}
            />
            <input 
                className='input'
                name='lastName' 
                type='text' 
                placeholder='last name' 
                onChange={handleChange}
                value={personInfo.lastName}
            />
            <input 
                className='input'
                name='email' 
                type='email' 
                placeholder='email' 
                onChange={handleChange}
                value={personInfo.email}
            />
            <textarea
                className='inputText' 
                name='comment' 
                placeholder='Leave a comment here' 
                onChange={handleChange}
                value={personInfo.comment}
            />
            <input 
                className='inputBox'
                type='checkbox'
                id='isBored'
                name='isBored'
                checked={personInfo.isBored}
                onChange={handleChange}
            />
            <label htmlFor='isBored'>Are you bored?</label>
            <p>Current employment status</p>
            <fieldset> 
                <input 
                    type='radio'
                    id='unemployed'
                    name='employment'
                    value='Unemployed'
                    onChange={handleChange}
                    checked={personInfo.employment === 'Unemployed'}
                />
                <label htmlFor='unemployed'>Unemployed</label>
                <input 
                    type='radio'
                    id='part-time'
                    name='employment'
                    value='Part-time'
                    onChange={handleChange}
                    checked={personInfo.employment === 'Part-time'}
                />
                <label htmlFor='part-time'>Part-time</label>
                <input 
                    type='radio'
                    id='full-time'
                    name='employment'
                    value='Full-time'
                    onChange={handleChange}
                    checked={personInfo.employment === 'Full-time'}
                />
                <label htmlFor='full-time'>Full-time</label>
            </fieldset>
            <label className='selectLabel' htmlFor='fav-color'>What is your favorite color</label>
            <br />
            <select id='fav-color' value={personInfo.favColor} name='favColor' onChange={handleChange}>
                <option value=''>--Choose--</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
                <option value='yellow'>Yellow</option>
                <option value='gray'>Gray</option>
                <option value='brown'>Brown</option>
            </select>
            <br />
            <button className='submit'>Submit</button>
        </form>
    )
}

export default App;