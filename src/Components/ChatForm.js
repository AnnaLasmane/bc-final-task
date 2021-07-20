import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ChatForm({ reloadMessageList }) {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }
    const onSubmit = async () => {
        if (username === '') {
            alert('Please fill the Username!');
            return;
        }

        const url = 'http://localhost:8070/chat-messages';
        const data = {
            username: username,
            message: message,
        };

        try {
            await axios.post(url, data);
            setUsername('');
            setMessage('');
            reloadMessageList();
        } catch (e) {
            alert('Something went wrong when talking to the server');
        }
    }


    return (
        <form className="bg-light text-secondary p-3 my-2 text-secondary rounded" onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-between">
                <div className="col-10 text-secondary fw-bold">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <label>Username:</label>
                            </div>
                            <div>
                                <input {...register("Username", {
                                    required: '  Username is required',
                                    minLength: {
                                        value: 3,
                                        message: '  Username must be min 3 symbols long'
                                    }
                                })} className="form-control" onChange={changeUsername} value={username} />
                                {errors.Username?.message}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Message:</label>
                    </div>
                    <div>
                        <textarea {...register("Message", {required: '  Please enter a message'})} className="form-control" onChange={changeMessage} value={message} />
                        {errors.Message?.message}
                    </div>
                </div>
                <div className="col-2 d-grid gap-2 d-block align-items-end">
                    <button className="text-secondary fw-bold btn btn-light btn-outline-dark" type="submit" >Send</button>
                </div>
            </div>
        </form>
    )
}

export default ChatForm;