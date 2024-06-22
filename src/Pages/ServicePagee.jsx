import React from 'react'
import { useParams } from 'react-router-dom'

const ServicePage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>this is page number : {id}</h1>
        </div>
    )
}

export default ServicePage
