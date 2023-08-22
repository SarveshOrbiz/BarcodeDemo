import React from 'react'

const Textfield = ({ label, type, placeholder,name }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type={type} className="form-control" name={name} placeholder={placeholder ? placeholder : ""} />
        </div>
    )
}

export default Textfield