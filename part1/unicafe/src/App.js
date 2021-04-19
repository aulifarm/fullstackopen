import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={props.feedback[0]} />
      <StatisticLine text="Neutral" value={props.feedback[1]} />
      <StatisticLine text="Bad" value={props.feedback[2]} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={props.avg} />
      <StatisticLine text="Positive" value={props.positive} />
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const avg = ((good - bad) / all).toFixed(1)
  const positive = (100* good / all).toFixed(1) + " %"

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h1>Statistics</h1>
      <Statistics feedback={[good, neutral, bad]} all={all} avg={avg} positive={positive} />
    </div>
  )
}

export default App