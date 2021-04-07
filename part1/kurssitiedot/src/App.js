import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
      <p>
      Name of the part is "{props.part}" and there are {props.exercises} exercises.
      </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Total number of exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
     {    
        name: 'Fundamentals of React',
        exercises: 10
     },
     {
        name: 'Using props to pass data',
        exercises: 7
     },
     {
        name: 'State of a component',
        exercises: 14 
     } 
    ]
}

  return (
    <>
      <Header name ={course.name}/>
      <Content course={course} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </>
  )
}

export default App