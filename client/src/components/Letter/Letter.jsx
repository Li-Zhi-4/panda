import { useEffect, useState } from 'react';
import './Letter.css';

const API_BASE = import.meta.env.VITE_API_URL;

async function fetchData(id) {
    const res = await fetch(`${API_BASE}/api/letters/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}

function Letter({ id }) {
    const [letter, setLetter] = useState(null);

    useEffect(() => {
        fetchData(id).then(setLetter);
    }, []);

    if (!letter) return <p>Loading…</p>;
    
    return (
        <div className="letter">
            <div className="letter-content">
                <h1>{letter.title}</h1>
                <div className="divider-horizontal"></div>
                <div className="letter-toolbar">
                    <div className="toolbar-left">
                        <span className="p date"><strong>Send:</strong> 01/01/2001</span>
                        <div className="divider-vertical"></div>
                        <span className="p word-count">11 words</span>
                    </div>
                    <button className='icon'>Icon</button>
                </div>
                <div className="divider-horizontal"></div>
                <span className='p content'>{letter.content}</span>
            </div>

            <div className="letter-content">
                <div className="divider-horizontal"></div>
                <div className="letter-nav">
                    <div className="nav back">
                        <a href="">&lt; Back</a>
                        <span className="p">Previous title name</span>
                    </div>
                    <div className="divider-vertical"></div>
                    <div className="nav next">
                        <a href="">Next &gt;</a>
                        <span className="p">Next title name</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Letter };