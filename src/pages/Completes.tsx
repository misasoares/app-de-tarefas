import FloatingActionButtons, { TasksDTO } from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function Completes() {
  const [tasks, setTasks] = useState<TasksDTO[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  function getTasks(tasks: TasksDTO[]) {
    setTasks(tasks);
  }

  function checkTasks(index: number) {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <>
      <MySearch />
      <h1>Tarefas concluidas</h1>

      {tasks
        .filter((t) => t.checked === true)
        .map((t, index) => (
          <div key={index}>
            <div style={{ display: "flex" }}>
              {/* Utiliza o componente Checkbox do MUI para refletir o estado de checked */}
              <Checkbox checked={t.checked} onChange={() => checkTasks(index)} style={{ color: "#009688" }} />
              <p>{t.content}</p>
            </div>
          </div>
        ))}
      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons toTasks={getTasks} />
      </div>
    </>
  );
}
