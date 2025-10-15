import React from 'react'

const User = ({ name, department, skills }) => {
  return (
    <div>
        <h1>I am {name} from {department}</h1>
        <h2> My Skills : </h2>
        <ul>
            {skills.map((skill) => (
                <li>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default User