import "./detail.css";

const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img src='./avatar.png' alt='' />
                <h2>Pranjal Tiwari</h2>
                <p>Lorem ipsum dolor Meri Gnd main de do</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Setting</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy & Help</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Photos</span>
                        <img src='./arrowDown.png' alt='' />
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&f=1&nofb=1&ipt=93f32ad867b972f6ddfae681a0ce16a30a0dbd3f3bac2a32e9f994dfacd58989&ipo=images'
                                    alt='photo'
                                />
                                <span>photo_2_2020.png</span>
                            </div>
                            <img src='./download.png' alt='' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&f=1&nofb=1&ipt=93f32ad867b972f6ddfae681a0ce16a30a0dbd3f3bac2a32e9f994dfacd58989&ipo=images'
                                    alt='photo'
                                />
                                <span>photo_2_2020.png</span>
                            </div>
                            <img src='./download.png' alt='' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&f=1&nofb=1&ipt=93f32ad867b972f6ddfae681a0ce16a30a0dbd3f3bac2a32e9f994dfacd58989&ipo=images'
                                    alt='photo'
                                />
                                <span>photo_2_2020.png</span>
                            </div>
                            <img src='./download.png' alt='' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&f=1&nofb=1&ipt=93f32ad867b972f6ddfae681a0ce16a30a0dbd3f3bac2a32e9f994dfacd58989&ipo=images'
                                    alt='photo'
                                />
                                <span>photo_2_2020.png</span>
                            </div>
                            <img src='./download.png' alt='' />
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <div className='blockUser'>
                    <button>Block User</button>
                </div>
                <div className='logout'>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
