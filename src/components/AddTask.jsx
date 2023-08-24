import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../taskSlice";
import { useDispatch } from "react-redux";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    console.log(title, description);
    dispatch(addTaskToList({ title, description }));

    setTitle("");
    setDescription("");
  };

  return (
    <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="w-10">Tilte</Form.Label>
        <Form.Control
          type="title"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="Descrition"
          placeholder="Descrition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <div className="text-end my-4">
        <Button variant="primary" type="submit" onClick={addTask}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTask;
