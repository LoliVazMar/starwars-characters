
const Cards = ({ characters }) => {
    return (
      <>
        {characters.map((character) => (
          <div className="card" key={character.name}>
            <div className="card-body">
              <h5 className="card-title">Nombre: {character.name}</h5>
              <p className="card-text">Altura: {character.height}</p>
              <p className="card-text">Peso: {character.mass}</p>
              <p className="card-text">Año: {character.height}</p>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Cards