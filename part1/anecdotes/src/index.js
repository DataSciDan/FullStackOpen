import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handler, text}) => <button onClick={handler}>{text}</button>;


const App = ({anecdotes}) => {
        const [selected, setSelected] = useState(0);

        const choose = () => {
                const choice = Math.round(5 * Math.random());
                setSelected(choice);
        };

        const [votes, setVotes] = useState(new Array(6).fill(0));

        const vote = () => {
                const newState = [...votes];
                newState[selected] += 1;
                setVotes(newState);
        };

        const highestVotedAnecdote = () => {
                const highestVote = Math.max(...votes);
                return votes.indexOf(highestVote);
        };

        return (
                <div>
                        <h2>Anecdote of the day</h2>
                        <p>{anecdotes[selected]}</p>
                        <p>has {votes[selected]} votes</p>
                        <Button handler={vote} text='vote' />
                        <Button handler={choose} text='new anecdote'/>
                        <h2>Anecdote with most votes</h2>
                        <p>{anecdotes[highestVotedAnecdote()]}</p>
                </div>
        );
};


const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));