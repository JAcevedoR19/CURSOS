import React, { useState } from 'react';

const PokemonList = () => {
    const [lista, setLista] = useState([]);

    const getUsers = async () => {

    try {
        const endPoint = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=400';
        const response = await fetch(endPoint);
        const json = await response.json();
        const data = json.results;

        const promises = data.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
            };
        });

        const pokemonDetails = await Promise.all(promises);
        setLista(pokemonDetails);
    } catch (error) {
        console.error(error);
    }

    };

//   return (
//     <div>
//       <button onClick={getUsers} className="btn btn-success">
//         Consultar usuarios
//       </button>
//       {isLoading && (
//         <div className="progress m-4" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }}></div>
//         </div>
//       )}
//       <div className="row">
//         {lista.map((user) => (
//           <div key={user.id} className="col-md-3 card p-4 m-1">
//             <img src={user.image} alt={user.name} className="img-fluid" />
//             <h4>{user.id}</h4>
//             <h4>{user.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
};

export default PokemonList;
