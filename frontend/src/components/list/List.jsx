import ChatList from './chatList/ChatList.jsx';
import './List.css';
import UserInfo from './userInfo/UserInfo.jsx';

const List = () => {
    return(
        <div className='list'>
            <UserInfo />
            <ChatList />
        </div>
    )
};

export default List;
