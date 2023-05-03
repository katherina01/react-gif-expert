import React from 'react'

export const GifItem = ({tile, url, id}) => {
    
    return (
        <div className='card'>
            <img src={url} alt={tile} />
            <p>{tile}</p>
        </div>
    )
}
