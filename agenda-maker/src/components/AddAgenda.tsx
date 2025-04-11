import { JSX, useState } from "react";
import AgendaProps, { Agenda } from "../models/AgendaProps";



function AddAgenda({ handleToggle, setAgenda }: AgendaProps): JSX.Element {

    //new agenda data
    const [newAgenda, setNewAgenda] = useState<Agenda>({
        title: "",
        topics: [],
        description: "",
    });

    //new topic
    const [newTopic, setNewTopic] = useState<string>('');

    //methods for handling agenda data
    const handleAgendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewAgenda((prevAgenda) => ({
            ...prevAgenda,
            [name]: value,
        }));
    };

    const handleAddTopic = () => {
        setNewAgenda({
            ...newAgenda,
            topics: [...newAgenda.topics, newTopic]
        });
        setNewTopic(''); // Clear the input field after adding the topic
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAgenda!((prevAgenda) => [...prevAgenda, newAgenda]);
        setNewAgenda({
            title: "",
            topics: [],
            description: "",
        });
        handleToggle();
    }

    return (
        <div className="add-agenda-container">
            <h1>Add Agenda</h1>
            <button onClick={handleToggle}>click to View Agenda</button>
            <div className="agenda-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={newAgenda.title} onChange={handleAgendaChange} required />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={newAgenda.description} onChange={handleAgendaChange} required />
                    <label htmlFor="topics">Topics:</label>
                    <div id="topics-container">
                        <input
                            type="text"
                            id="topics"
                            name="topics"
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleAddTopic}
                            disabled={newTopic.trim() === ''}
                        >Add Topic</button>
                    </div>
                    <button
                        type="submit"
                        className="submitbtn"
                        disabled={!newAgenda.title.trim() || !newAgenda.description.trim() || newAgenda.topics.length === 0}>Add Agenda</button>
                </form>
            </div>
            <div className="added-topics">
                {newAgenda.topics.length === 0 && <p style={{ color: 'red' }}>No Topics added!</p>}
                {newAgenda.topics.length > 0 && (
                    <ul>
                        {newAgenda.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default AddAgenda;