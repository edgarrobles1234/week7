import React from "react";
import{
    Box,
    Heading,
    SimpleGrid,
    Text
} from"@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import {
    doc,
    getDoc
} from "firebase/firstore";
import {db} from "../../firebase";

//define jsx 
const ToDoItem = ({itemData})=>{
    const { user } = useAUth()|| {};
    if (!user) {
        return;
    }

    return  (
        <Box mt={5}>
            <Heading as="h2" fontSize={("2xl")}>
                { itemData.title }
            </Heading>
            <Text>
                {itemData.description}
            </Text>
            <Text>
                {itemData.status}
            </Text>
            <Text>
                {itemData.createdAt}
            </Text>
        </Box>
    );
};

export async function getServerSideProps (context) {
   let itmeData = null;
   const docRef = doc( db, 'todo', context.params.id);
   const docSnap = await getDoc(docRef);
   if (docSnap.exists() ){
    itemData = docSnap.data();
   }

   return {
    props: {
        itemData
    }
   };
};

export default ToDoItem;