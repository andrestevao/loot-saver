const incrementCount = () => (
    {
        type: 'INCREMENT_COUNT'
    }
);

const decrementCount = () => (
    {
        type: 'DECREMENT_COUNT'
    }
);

const setCount = ({ count } = {}) => (
    {
        type: 'SET_COUNT',
        count: count ? count : 0
    }
);

module.exports = {
    incrementCount,
    decrementCount,
    setCount
}