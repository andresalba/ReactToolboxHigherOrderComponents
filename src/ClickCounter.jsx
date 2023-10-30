import HOC from "./HOC";

const ClickCounter = (props) => {
    return (
        <button onClick={props.increment}>Click Counter</button>
    );
};


export default HOC(ClickCounter);