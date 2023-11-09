import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
// import Checkbox from "@mui/material/Checkbox";

export default function Home() {
  const tasksRedux = useAppSelector((state) => state.tasks);

  useEffect(() => {}, []);

  // function checkTasks(index: number) {
  //     tasks[index].checked = !tasks[index].checked;
  // }

  return (
    <>
      <MySearch />
      <h1>Lista de tarefas</h1>
      <p>Quantia de tasks: {tasksRedux.length}</p>
      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </>
  );
}
