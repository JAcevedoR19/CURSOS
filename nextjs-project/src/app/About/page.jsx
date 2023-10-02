import React from 'react'

export default function AboutPage() {
    return (
        <div>
            <h1>About</h1>
            <p>App creada en con React.js y Next.js, para cumplir el primer TP de la materia Taller de Programación II. <br/><br />

                Se usó la api de <kbd className="bg-dark"><a href="https://reqres.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none"}}><strong>REQRES</strong></a></kbd> para los datos que se deben mostrar. <br/><br/> Del mismo modo, cabe resaltar que <strong>se usó como referencia/tutorial este video de <kbd style={{ backgroundColor:"red", color:"white"}}><a href="https://www.youtube.com/watch?v=H_s-xM6Ii1g" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none"}}>YouTube</a></kbd></strong>. <br /><br /><br />
                <span className="text-dark"><strong>PD para el profesor:</strong></span> Los kdn se pueden clicklear para que revise la API y el video que usé para orientarme. Entendí casi todo pero aún hay algunas cosas que no me quedan del todo claras. Y de ahí va el hecho que no quise hacerlo con esta API, sino con la API de Pokémon y lo hice bien hasta el punto de mostrar en consola los datos pero al momento de mostrar por el lado del cliente, no se mostraban, así que decidí usar la misma API que se usa en este video.
            </p>
        </div>
    )
}
