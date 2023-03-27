import React from 'react'
import projets from '../../datas/projets'
import Card from '../Card/Card'

export default function Realisations() {
    console.log(projets)
    return (
        <div>
            {projets.map((projets) => {
                return (
                    <Card
                        key={projets.id}
                        id={projets.id}
                        link={projets.link}
                        img={projets.img}
                        desc={projets.description}
                    />
                )
            })}
        </div>
    )
}
