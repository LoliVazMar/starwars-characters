
const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div className="card flex flex-col rounded bg-zinc-100 shadow h-fit" key={character.name}>
          <div className="card-body flex flex-col justify-between gap-x-6 py-5">
            <h5 className="card-title text-2xl text-gray-900 text-center">{character.name}</h5>
            <p className="card-text text-xs text-center text-gray-500">Año: {character.birth_year}</p>
            <div className="card-footer mt-5 grid grid-cols-2 justify-around hidden sm:flex divide-x divide-solid divide-slate-300 text-center">
              <div className="card-footer-left w-full">
                <h6 className="text-center">Aspecto</h6>
                <p className="card-text">Pelo: {character.hair_color}</p>
                <p className="card-text">Ojos: {character.eye_color}</p>
              </div>
              <div className="card-footer-right w-full">
                <h6 className="text-center">Dimensiones</h6>
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