import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejść na REACTa", done: true },
  { id: 2, content: "zjeść śniadanko", done: false }
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header tittle="Lista zadań" />
      <Section
        tittle="Dodaj nowe zadanie"
        body={<Form />
        }
      />

      <Section
        tittle="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
