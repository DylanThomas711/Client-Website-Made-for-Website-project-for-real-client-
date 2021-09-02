import { Link } from "react-router-dom";

const Error = ({load}) => {
  return (
    <div className="error">
      <h1 className="errorTitle">Error.</h1>
      <p className="errorDesc">Sorry, we couldn't connect. Time for you to go on a virtual ROAD TRIP.</p>
      <button className="contactBTN" onClick={() => load()}>Back to Home</button>
    </div>
  )
}

export default Error;
