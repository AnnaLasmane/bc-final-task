import Breadcrumbs from "../Components/Breadcrumbs";
import { useState } from "react";
import ChatForm from "../Components/ChatForm";
import ChatMessagesList from "../Components/ChatMessagesList";

function Chat() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
    ]

    const [counter, setCounter] = useState(0);

    const reloadMessageList = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2 className="text-dark mb-4">Chat with us!</h2>
            <ChatMessagesList counter={counter} reloadMessageList={reloadMessageList} />
            <ChatForm reloadMessageList={reloadMessageList} />
        </div>
    )
}

export default Chat;