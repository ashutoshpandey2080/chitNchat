import "./chat.css";
import SendIcon from "../../../public/send.svg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import {
    doc,
    onSnapshot,
    updateDoc,
    arrayUnion,
} from "firebase/firestore";
import { db, storage } from "../../lib/firebase.js";
import { useChatStore } from "../../lib/chatStore.js";
import { useUserStore } from "../../lib/userStore.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Chat = () => {
    const [chat, setChat] = useState([]);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const { chatId } = useChatStore();
    const { currentUser } = useUserStore();
    const endRef = useRef(null);

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        //setOpen(false);
        //to close the emoji picker after selecting single emoji
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSend = async () => {
        if (text.trim() === "" && !file) return;

        const chatRef = doc(db, "chats", chatId);
        let message = {
            text,
            senderId: currentUser.id,
            senderAvatar: currentUser.avatar, // Include the user's avatar URL
            timestamp: new Date(), // Use a plain Date object here
        };

        console.log("Message Data:", message); // Log message data

        if (file) {
            const fileRef = ref(storage, `chats/${chatId}/${file.name}`);
            await uploadBytes(fileRef, file);
            const fileURL = await getDownloadURL(fileRef);
            message.fileURL = fileURL;
            message.fileName = file.name;
            setFile(null);
        }

        await updateDoc(chatRef, {
            messages: arrayUnion(message),
        });

        setText("");
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            setChat(res.data()?.messages || []);
        });

        return () => {
            unSub();
        };
    }, [chatId]);

    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <span>Pranjal Tiwari</span>
                        <p>Lorem ipsum dolor Gand main de do meri</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='./phone.png' alt='' />
                    <img src='./video.png' alt='' />
                    <img src='./info.png' alt='' />
                </div>
            </div>
            <div className='center'>
                {chat.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${
                            message.senderId === currentUser.id ? "own" : ""
                        }`}
                    >
                        {message.senderId !== currentUser.id && (
                            <img
                                src={message.senderAvatar || "./avatar.png"}
                                alt=''
                            />
                        )}
                        <div className='texts'>
                            {message.fileURL ? (
                                message.fileURL.match(
                                    /\.(jpeg|jpg|gif|png)$/
                                ) ? (
                                    <img
                                        src={message.fileURL}
                                        alt={message.fileName}
                                    />
                                ) : (
                                    <a
                                        href={message.fileURL}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {message.fileName}
                                    </a>
                                )
                            ) : (
                                <p>{message.text}</p>
                            )}
                            <span>
                                {new Date(
                                    message.timestamp?.toDate()
                                ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <label htmlFor='fileInput'>
                        <img src='./img.png' alt='' />
                    </label>
                    <input
                        type='file'
                        id='fileInput'
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <img src='./camera.png' alt='' />
                    <img src='./mic.png' alt='' />
                </div>
                <input
                    type='text'
                    placeholder='Type a message....'
                    value={text}
                    onChange={handleChange}
                />
                <div className='emoji'>
                    <img
                        src='./emoji.png'
                        alt=''
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    {open && (
                        <div className='picker'>
                            <EmojiPicker onEmojiClick={handleEmoji} />
                        </div>
                    )}
                </div>
                <button className='submitButton' onClick={handleSend}>
                    <img src={SendIcon} alt='Send Icon' />
                </button>
            </div>
        </div>
    );
};

export default Chat;