import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Link to="/login "style={{padding:"0px 50px"}}>
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
