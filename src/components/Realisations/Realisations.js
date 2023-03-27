import React from 'react'
import projets from '../../datas/projets'
import Card from '../Card/Card'

export default function Realisations() {
    return (
        <div>
            {projets.map((projets) => {
                return (
                    <Card
                        key={projets.id}
                        id={projets.id}
                        img={projets.img}
                        desc={projets.description}
                    />
                )
            })}
        </div>
    )
}
