import React from 'react'
import Form from '../hooks/Form'
import State from '../hooks/State'
import Like from '../hooks/Like'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
const Home = () => {
    return (
        <div>
            <Parent />
            <Form />
            <State />
            <Like />
            <Profile name="John" age={20} skills={["HTML","CSS","Javascript"]}/>
        </div>
    )
}
export default Home;