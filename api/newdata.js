import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";

const addNewData = async ({ userId, thoughts, status }) => {
try {
await addDoc(collection(db, "newdata"), {
user: userId,
thoughts: thoughts,
status: status,
createdAt: new Date().getTime(),
});
} catch (err) {}
};


const deletenewdata = async (docId) => {
try {
const newdataRef = doc(db, "newdata", docId);
await deleteDoc(newdataRef);
} catch (err) {
console.log(err);
}
};

export { addNewData, deletenewdata };