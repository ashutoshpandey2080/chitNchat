import "./chat.css";
import SendIcon from "../../../public/send.svg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        //setOpen(false);
        //to close the emoji picker after selecting single emoji
    };

    const HandleChange = (e) => {
        setText(e.target.value);
    }

    const endRef = useRef(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    })
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
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <img
                            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2014%2F09%2FNikon-D750-Image-Samples-2.jpg&f=1&nofb=1&ipt=e52df481997697e4ee61ca37447b874e03413f48a65d49c019f5a9fc13041ccd&ipo=images'
                            alt=''
                        />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis praesentium rem autem repellendus
                            natus maiores expedita eum. Perspiciatis eveniet
                            blanditiis in modi. Adipisci, odio consequuntur
                            eaque dolores molestiae provident totam?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src='./img.png' alt='' />
                    <img src='./camera.png' alt='' />
                    <img src='./mic.png' alt='' />
                </div>
                <input
                    type='text'
                    placeholder='Type a message....'
                    className=''
                    value={text}
                    onChange={HandleChange}
                />
                <div className='emoji'>
                    <img
                        src='./emoji.png'
                        alt=''
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className='picker'>
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className='submitButton'>
                    <img src={SendIcon} alt='Send Icon' />
                </button>
            </div>
        </div>
    );
};

export default Chat;
