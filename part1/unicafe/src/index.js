import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({sectionTitle}) => <h2>{sectionTitle}</h2>;

const Display = ({text}) => <p>{text}</p>

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>;

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>;

const Statistics = ({stats}) => {
        const rows = stats.map(stat => <Statistic text={stat.text} value={stat.value} key={stat.text} />);
        return (
                <table>
                        <tbody>
                                {rows}
                        </tbody>
                </table>
        )
};

const App = () => {

        const [good, setGood] = useState(0);
        const [neutral, setNeutral] = useState(0);
        const [bad, setBad] = useState(0);

        const totalReviews = () => good + neutral + bad;

        const averageFeedback = () => (good - bad) / (totalReviews());

        const positiveFeedback = () => (good + neutral) / (totalReviews());

        const stats = [{text: 'good', value: good}, {text: 'neutral', value: neutral},{text: 'bad', value: bad}, {text: 'all', value: totalReviews()}, {text: 'average', value: averageFeedback()}, {text: 'positive', value: positiveFeedback()}];

        if (!totalReviews()) {
                return (
                        <div>
                                <Header sectionTitle='give feedback' />
                                <Button handler={() => setGood(good + 1)} text='good' />
                                <Button handler={() => setNeutral(neutral + 1)} text='neutral' />
                                <Button handler={() => setBad(bad + 1)} text='bad' />
                                <Header sectionTitle='statistics' />
                                <Display text='no feedback given' />
                        </div>
                )
        }

        return (
                <div>
                        <Header sectionTitle='give feedback' />
                        <Button handler={() => setGood(good + 1)} text='good' />
                        <Button handler={() => setNeutral(neutral + 1)} text='neutral' />
                        <Button handler={() => setBad(bad + 1)} text='bad' />
                        <Header sectionTitle='statistics' />
                        <Statistics stats={stats} />
                </div>
        );
};

ReactDOM.render(<App />, document.getElementById('root'));