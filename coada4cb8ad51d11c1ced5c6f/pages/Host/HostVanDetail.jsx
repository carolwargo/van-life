import React from "react";  
import { useParams } from "react-router-dom";   

export default function HostVanDetail() {
    {/*id vans:id from index.jsx */}
    const {id} = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    
    {/* Match above params "id vans:id from index.jsx" */}
    React.useEffect(() => {
         
        fetch(`/api/host/vans${id}`)
            .then(res => res.json())
            .then(data =>setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        {/* Need to add a real loading state */}
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )   
}