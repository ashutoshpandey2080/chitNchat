import { toast } from 'react-toastify';
import './login.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload.js';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const [loading, setLoading] = useState(false);

    const handleFile = (e) => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const imageURL = await upload(avatar.file ? avatar.file : "./avatar.png");
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imageURL,
                id: res.user.uid,
                blocked : []
            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });
            toast.success("User registered successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally{
            setLoading(false);
            e.target.reset();
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formdata = new FormData(e.target);
        const { email, password } = Object.fromEntries(formdata);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            toast.success("User logged in successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }finally{
            setLoading(false);
            e.target.reset();
        }
    };


    return (
        <div className='login'>
            <div className='item'>
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type='email' name='email' placeholder='Email' />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? "Loading..." : "Sign In"}
                    </button>
                </form>
            </div>
            <div className='separate'></div>
            <div className='item'>
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor='file'>
                        {/* <img src={avatar.url || ""} alt="" /> */}
                        <img src={avatar.url || "./avatar.png"} alt='' />
                        Upload Profile Image
                    </label>
                    <input
                        type='file'
                        name='file'
                        id='file'
                        style={{ display: "none" }}
                        onChange={handleFile}
                    />
                    <input type='text' name='username' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? "Loading..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;