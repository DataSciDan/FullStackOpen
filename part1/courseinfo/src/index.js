import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({inner}) => <h1>{inner}</h1>;

const Part = ({name, exercises}) => <p>{name} {exercises}</p>;

const Content = ({parts}) => {
        let partComponents = [];
        for (let part of parts) {
                partComponents.push(<Part name={part.name} exercises={part.exercises} />);
        }
        return partComponents;
};

const Total = ({parts}) => {
        let total = 0;
        for (let part of parts) {
                total += part.exercises;
        }
        return <p>Number of exercises {total}</p>;
};

const App = () => {
        const course = {
                name: "Half stack application development",
                parts: [
                        {
                                name: "Fundamentals of React",
                                exercises: 10
                        },
                        {
                                name: "Using props to pass data",
                                exercises: 7
                        },
                        {
                                name: "State of a component",
                                exercises: 14
                        }
                ]
        }

        return (
                <div>
                        <Header inner={course.name} />
                        <Content parts={course.parts} />
                        <Total parts={course.parts} />
                </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));