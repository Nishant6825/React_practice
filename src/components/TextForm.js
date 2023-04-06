import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('')
    const toUp = () => {
        // console.log('Text converted to Upper case ')
        let newText = text.toUpperCase()
        console.log(newText)
        setText(newText)
    }
    const cap = () => {
        let capital = text.charAt(0).toUpperCase() + text.slice(1)
        // console.log(capital
        setText(capital)
    }
    const tolow = () => {
        let low = text.toLowerCase()
        console.log(low)
        setText(low)
    }
    const handleEvent = (event) => {
        // console.log('Key is Pressed')
        setText(event.target.value)
    }
    const cleartext = () => {
        let newtext = '';
        setText(newtext)
    }
    const alterCase = () => {
        let char = text.toLowerCase().split('')
        for (var i = 0; i < char.length; i += 3) {
            char[i] = char[i].toUpperCase()
        }
        let some = char.join('')
        setText(some)
    }

    const tit = () => {
        let newT = text.toLowerCase().split(' ')
        let cc = newT.map(el => el.charAt(0).toUpperCase() + el.slice(1))
        let ss = cc.join(" ")
        console.log(ss)
        setText(ss)
    }



    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Text Area</label>
                    <textarea className="form-control" value={text} onChange={handleEvent} id="myBox" rows="7" placeholder='Chal maal daaal....'></textarea>
                </div>
                <button className="btn btn-info mx-1" onClick={toUp}>Convert to Upper Case</button>
                {/* <br /> */}
                <button className="btn btn-info mx-1" onClick={tolow}>Convert to Lower Case</button>
                {/* <br /> */}
                <button className="btn btn-info mx-1" onClick={cap}>Capitalize</button>
                <button className="btn btn-info mx-1" onClick={cleartext}>Clear Text</button>
                <button className="btn btn-info mx-1" onClick={alterCase}>Alternate Caps</button>
                <button className="btn btn-info mx-1" onClick={tit}>Title Case </button>
            </div>
            <div className="container">
                <h1>This is a summary of text</h1>
                <p>This summary have {text.split(" ").length} words and {text.length} letters in it  </p>
                <h2>Preview <br /></h2>
                <p><b>{text}</b> </p>

            </div>
        </>

    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}