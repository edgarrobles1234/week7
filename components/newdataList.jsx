import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import useAuth from "../hooks/useAuth";
  import { collection, onSnapshot, query, where } from "firebase/firestore";
  import { db } from "../firebase";
  import { FaTrash } from "react-icons/fa";
  import { deletenewdata } from "../api/newdata";


  const feelList = () => {
    const [newdatas, setnewdatas] = React.useState([]);
    const { user } = useAuth();
    const toast = useToast();
  
  
    useEffect(() => {
      if (!user) {
        setnewdatas([]);
        return;
      }
      const q = query(collection(db, "newdata"), where("user", "==", user.uid));
  
      onSnapshot(q, (querySnapchot) => {
        let ar = [];
        querySnapchot.docs.forEach((doc) => {
          ar.push({ id: doc.id, ...doc.data() });
        });
        setnewdatas(ar);
      });
    }, [user]);
  
    const handleStatusDelete = async (id) => {
      if (confirm("Are you sure you wanna delete this status?")) {
        deletenewdata(id);
        toast({ status: "success" });
      }
    };
  
    return (
      <Box mt={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {newdatas &&
            newdatas.map((newdata) => (
              <Box
                key={newdata.id}
                p={3}
                boxShadow="2xl"
                shadow={"dark-lg"}
                transition="0.2s"
                _hover={{ boxShadow: "sm" }}
              >
                <Heading as="h3" fontSize={"xl"}>
                  {newdata.stauts}{" "}
                  <Badge
                    color="red.500"
                    bg="inherit"
                    transition={"0.2s"}
                    _hover={{
                      bg: "inherit",
                      transform: "scale(1.2)",
                    }}
                    float="right"
                    size="xs"
                    onClick={() => handleStatusDelete(newdata.id)}
                  >
                    <FaTrash />
                  </Badge>
                  
                </Heading>
                <Text>{newdata.thoughts}</Text>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    );
  };
  export default feelList;
  