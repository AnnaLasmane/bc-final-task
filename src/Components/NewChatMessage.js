function NewChatMessage({ username, message, time }) {

    return (
        <li className="list-group-item bg-light">
            <div className="card bg-light text-secondary mt-1 mb-3 border border-secondary">
                <div className="card-header fs-5 text-secondary">
                    <span className="me-5">{username}</span>
                    <span>{time}</span>
                </div>
                <div className="card-body m-0 fs-6">
                    <div>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default NewChatMessage;