import './Break.css';


export function Break() {

  return (

    <>
      <div className="breaks">
        <img className={"break-item"}
          src={process.env.PUBLIC_URL + `/assets/break/cake.svg`}
        />
      </div>
    </>

  )
}