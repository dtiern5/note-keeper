import React from "react";
import Note from "./Note";

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
        title: "",
        content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea;