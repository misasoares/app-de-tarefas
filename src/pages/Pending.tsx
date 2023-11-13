import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, toggleTaskCheck } from "../store/modules/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";



export default function Pending() {
  const tasksRedux = useAppSelector((state) => state.tasks);
  const [filterdTasks, setFilteredTasks] = useState<TaskType[]>([])
  const dispatch = useAppDispatch();


  function checkTasks(t: TaskType) {
    dispatch(toggleTaskCheck(t));
    setFilteredTasks([])
  }

  function getSearch(change:string){
    setFilteredTasks(tasksRedux.filter((item:TaskType)=>{
      return item.content.toLowerCase().includes(change.toLowerCase())
    }))

    console.log(filterdTasks)
  }

  const pendingLength = tasksRedux.filter((t:TaskType)=> !t.checked)


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <MySearch search={getSearch}/>
      <h1>Tarefas Pendentes</h1>
    <p>Você tem {pendingLength.length} tarefas pendentes.</p>

      <List sx={{ width: "100%", maxWidth: 360 }}>
      {filterdTasks.length > 0 ? filterdTasks.map((f)=> f.checked === false?(
          <ListItem key={f.id}>
          {<Checkbox  onChange={() => checkTasks(f)} style={{ color: "#009688" }} />}
          {f.content}
        </ListItem>
        ): null)
         :
        tasksRedux.map((t:TaskType) => t.checked === false ? (
          <ListItem key={t.id}>
            <Checkbox  onChange={() => checkTasks(t)} style={{ color: "#009688" }} />
            {t.content}
          </ListItem>
        ): null)}
      </List>

      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </div>
  );
}
