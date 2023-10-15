import React from "react";
import {
Box,
Input,
Button,
Textarea,
Stack,
Select,
useToast,
Heading,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addNewData } from "../api/newdata";


const NewData = () => {
const [thoughts, setThought] = React.useState("");
const [status, setStatus] = React.useState("pending");
const [isLoading, setIsLoading] = React.useState(false);
const toast = useToast();
const { isLoggedIn, user } = useAuth();
const handleTodoCreate = async () => {
if (!isLoggedIn) {
toast({
status: "error",
duration: 9000,
isClosable: true,
});
return;
}

setIsLoading(true);
const newdata = {
thoughts,
status,
userId: user.uid,
};

await addNewData (newdata);
setIsLoading(false);
setThought("");
setStatus("pending");
toast({ title: "Status for today created", status: "success" });
};
return (
<Box w="40%" margin={"0 auto"} display="block" mt={5}>
<Stack direction="column">
<Heading>How are you feeling today</Heading>



<Select value={status} onChange={(e) => setStatus(e.target.value)}>
<option
value={"happy"}
style={{ color: "yellow", fontWeight: "bold" }}
>
Happy 😀
</option>
<option
value={"sad"}
style={{ color: "blue", fontWeight: "bold" }}
>
Sad 😔
</option>
<option
value={"angry"}
style={{ color: "red", fontWeight: "bold" }}
>
Angry 😡
</option>
<option
value={"nervous"}
style={{ color: "gray", fontWeight: "bold" }}
>
Nervous 😬
</option>
</Select>
<Textarea
placeholder="Write Your Thoughts"
value={thoughts}
onChange={(e) => setThought(e.target.value)}
/>

<Button
onClick={() => handleTodoCreate()}
disabled={thoughts.length < 1 || isLoading}
colorScheme="teal"
variant="solid"
>
Add
</Button>
</Stack>
</Box>
);
};
export default NewData;
