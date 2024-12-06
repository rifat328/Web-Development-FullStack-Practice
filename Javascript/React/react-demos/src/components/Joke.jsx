export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            {props.comments && <p>{props.comments } </p> }<br/>
            <hr />
        </>
    )
}