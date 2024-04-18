const Browser = ({ endSearch, onChange }) => {

    return (
      <div>
        <h5>Search:</h5>
        <input type="text" placeholder="Name" value={endSearch} onChange={onChange} />
      </div>
    )
  }
  
  export default Browser