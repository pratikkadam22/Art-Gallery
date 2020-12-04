import React from 'react'

function StatusMessage() {
    console.log("status component")
    return (
        <div>
            <div className="alert alert-danger" role="alert">
            The data provided is incorrect!
            </div>
        </div>
    )
}

export default StatusMessage;