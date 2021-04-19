import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
 

  const handleVoteClick = () => {
    const votesArray = [...votes]
    votesArray[selected] += 1
    setVotes(votesArray)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} 
      <br/>
      <br/>
      This anecdote has {votes[selected]} votes</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))} >Next anecdote</button>
      <button onClick={handleVoteClick}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

export default App