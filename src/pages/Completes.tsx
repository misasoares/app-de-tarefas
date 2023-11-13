import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, toggleTaskCheck } from "../store/modules/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {  useState } from "react";

export default function Completes() {
  const tasksRedux = useAppSelector((state) => state.tasks);
  const [filterdTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const dispatch = useAppDispatch();



  function checkTasks(t: TaskType) {
    dispatch(toggleTaskCheck(t));
    setFilteredTasks([]);
  }

  function getSearch(change: string) {
    setFilteredTasks(
      tasksRedux.filter((item: TaskType) => {
        return item.content.toLowerCase().includes(change.toLowerCase());
      })
    );
  }

  const concludeLength = tasksRedux.filter((t:TaskType)=> t.checked)

 
  return (
    <>
      <MySearch search={getSearch} />
      <h1>Tarefas concluidas</h1>
      <p>Você tem {concludeLength.length} tarefas concluídas.</p>

      <List sx={{ width: "100%", maxWidth: 360 }}>
        {filterdTasks.length > 0
          ? filterdTasks.map((f) =>
              f.checked === true ? (
                <ListItem key={f.id}>
                  {f.checked === true ? (
                    <Checkbox defaultChecked onChange={() => checkTasks(f)} style={{ color: "#009688" }} />
                  ) : (
                    <Checkbox onChange={() => checkTasks(f)} style={{ color: "#009688" }} />
                  )}
                  {f.content}
                </ListItem>
              ) : null
            )
          : tasksRedux.map((t: TaskType) =>
              t.checked === true ? (
                <ListItem key={t.id}>
                  <Checkbox defaultChecked onChange={() => checkTasks(t)} style={{ color: "#009688" }} />
                  {t.content}
                </ListItem>
              ) : null
            )}
      </List>

      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </>
  );
}
