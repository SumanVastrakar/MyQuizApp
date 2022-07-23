import "./Error.css";
import {Link} from "react-router-dom"
export const ErrorRoute = () => {
  return (
    <section>
      <div className="errordiv">
        {/* <h2>WE'RE SORRY</h2> */}
        <img style={{width : "800px", height : "600px"}}
          src="https://nsw.md.go.th/mdpilotinfo/img/jisunpark_404-error.gif"
          alt="error pic"
        />
        {/* <p>
          We can't seem to find the page you're looking for.
          <br />
          Want to try searching for something else?
        </p> */}
        <div>
            <Link to="/">
            <button>Go Back</button>
            </Link>
        
        
        </div>
      </div>
    </section>
  );
};
