import HOC from "./HOC";

const MouseCounter = (props) => {
    return (
        <button onMouseOver={props.increment}>Mouse Counter</button>
    );
};


export default HOC(MouseCounter);