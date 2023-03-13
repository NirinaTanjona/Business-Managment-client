import { Link } from 'react-router-dom';


function LandingPage() {

  return (
    <div>
      <h1>Welcome to the landing page of business management</h1>
      <Link to="sign-in">sign-in</Link>
    </div>
  )
}
export default LandingPage