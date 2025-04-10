import { JSX } from "react";
import AgendaProps from "../models/AgendaProps";



function AgendaList({ handleToggle, agenda }: AgendaProps): JSX.Element {

    return (
        <div className="agenda-container">
            <h1>Agenda</h1>
            <button onClick={handleToggle}>Click to Add Agenda</button>
            {agenda!.map((item, index) => (
                <div className="agenda-list" key={index}>
                    <p>{item.title} </p>
                    <div className="agenda-topics">
                        <ul>
                            {item.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                    <p>{item.description}</p>
                </div>))}
        </div>
    )
}

export default AgendaList;