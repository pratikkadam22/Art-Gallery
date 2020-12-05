import React from 'react'

/**
 * A functional component for rendering the status message if the provided data for new art is incorrect.
 * 
 * @component
 */
function StatusMessage() {
    
    return (
        <div>
            <div className="alert alert-danger" role="alert">
            The data provided is incorrect!
            </div>
        </div>
    )
}

export default StatusMessage;