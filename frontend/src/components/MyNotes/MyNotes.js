import React, { useEffect } from "react";
import MainScreen from "../MainScreen";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import  notes  from "../../data/notes.js";

const MyNotes = () => {


  useEffect(()=>{
    console.log(notes)
  })

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")){

    }

  }

  return (
    <MainScreen title="Welcome back kushan de sivla">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {note.title}
            </span>

            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
               {note.content}
              </p>
              <footer className="blockquote-footer">
                  Create on -date
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
