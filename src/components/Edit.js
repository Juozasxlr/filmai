import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

function Edit() {
    const [editedTitle, setEditedTitle] = useState('');
    const [editedBody, setEditedBody] = useState('');
    const [editedAuthor, setEditedEdAuthor] = useState('');

    const [editingTitle, setEditingTitle] = useState(false);
    const [editingBody, setEditingBody] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState(false);

    const history = useHistory();

    const { id } = useParams();

    const { data: filmas, error, isPending } = useFetch('http://localhost:8000/filmai/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let title = editingTitle ? editedTitle : filmas.title;
        let body = editingBody ? editedBody : filmas.body;
        let author = editingAuthor ? editedAuthor : filmas.author;

        console.log(title, body, author)

        const editedFilmas = { title, body, author };

        fetch('http://localhost:8000/filmai/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedFilmas)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Koreguoti - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {filmas && (<form>
                <label>Filmo pavadinimas:</label>
                <input type="text" value={editingTitle ? editedTitle : filmas.title} onChange={(e) => {
                    setEditingTitle(true);
                    setEditedTitle(e.target.value);
                }} />

                <label>Filmo aprašymas:</label>
                <textarea value={editingBody ? editedBody : filmas.body} onChange={(e) => {
                    setEditingBody(true);
                    setEditedBody(e.target.value);
                }} ></textarea>

                <label>Filmo režisierius:</label>
                <input value={editingAuthor ? editedAuthor : filmas.author} onChange={(e) => {
                    setEditingAuthor(true);
                    setEditedEdAuthor(e.target.value);
                }} />

                <button onClick={handleSave}>Išsaugoti</button>
            </form>)}
        </div>
    );
}

export default Edit;