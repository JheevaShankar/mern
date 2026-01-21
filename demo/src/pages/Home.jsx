import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to = '/state'>useState</Link>
          <br />
          <Link to='/effect'>useEffect</Link>
        </li>
      </ul>
      {/* <User name="JheevaShankar" department="AIML" skills={["HTML", "CSS", "JS"]} /> */}
    </div>
  )
}

export default Home
