
const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div className="card flex flex-col rounded bg-zinc-100 shadow" key={character.name}>
          <div className="card-body flex flex-col justify-between gap-x-6 py-5">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Año: {character.height}</p>
            <div className="card-footer flex-row justify-around gap-4 hidden sm:flex divide-x divide-solid">
              <div className="card-footer-left">
                <h6>Aspecto</h6>
                <p className="card-text">Pelo: {character.height}</p>
                <p className="card-text">Ojos: {character.height}</p>
              </div>
              <div className="card-footer-right">
                <h6>Dimensiones</h6>
                <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Peso: {character.mass}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards