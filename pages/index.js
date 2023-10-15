import { Container } from "@chakra-ui/react";
//import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import NewData from "../components/newdata";
import feelList from "../components/newdataList";

export default function Home() {
return (
<Container maxW="7xl">
<Auth />
<NewData /> 
<TodoList />
<feelList />
</Container>
);
}