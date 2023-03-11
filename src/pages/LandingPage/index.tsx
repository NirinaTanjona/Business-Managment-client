import { Link } from 'react-router-dom';

function LandingPage() {

  return (
    <div>
      <Link to="sign-in" >Sign in</Link>
      <Link to="sign-up">Sign up</Link>
      <h1>Welcome to the landing page of business management</h1>
    </div>
  )
}
export default LandingPage