import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useUserStore } from "../../../lib/userStore.js";
import AddUser from "./addUser/AddUser.jsx";
import "./ChatList.css";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase.js";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);
    const { currentUser } = useUserStore();

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const items = res.data().chats || []; // Ensure items is defined
                console.log("Fetched items:", items); // Log items

                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "users", item.receiverId); // Fetch user data from "users" collection
                    try {
                        const userDocSnap = await getDoc(userDocRef);
                        if (!userDocSnap.exists()) {
                            console.log(
                                `No document found for receiverId: ${item.receiverId}`
                            );
                            return { ...item, user: null };
                        }
                        const userData = userDocSnap.data();
                        console.log(
                            `Fetched user data for receiverId ${item.receiverId}:`,
                            userData
                        ); // Log userData
                        return { ...item, user: userData };
                    } catch (error) {
                        console.error(
                            `Error getting document for receiverId: ${item.receiverId}`,
                            error
                        );
                        return { ...item, user: null };
                    }
                });

                const chatData = await Promise.all(promises);
                console.log("Final chat data:", chatData); // Log chatData
                setChats(chatData);
            },
            (error) => {
                console.error("Error fetching user chats:", error);
            }
        );

        return () => unSub();
    }, [currentUser.id]);

    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' alt='' />
                    <input type='text' placeholder='Search' />
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt=''
                    className='add'
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            {chats.map((chat) => (
                <div className='item' key={chat.chatId}>
                    <img src={chat.user?.avatar || "./avatar.png"} alt='' />
                    <div className='texts'>
                        <span>{chat.user?.username || "Unknown user"}</span>
                        <p>{chat.lastMessage || "No message yet"}</p>
                    </div>
                </div>
            ))}

            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;
