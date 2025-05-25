import { useEffect, useState } from 'react';
import './ActivityFeed.css'

import profileIcon from '/src/assets/profile-icon.svg'

const API_BASE = import.meta.env.VITE_API_URL;

async function fetchData() {
    const res = await fetch(`${API_BASE}/api/letters/`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}

function ActivityFeed() {
    const [letterIndex, setLetterIndex] = useState(null);

    useEffect(() => {
        fetchData().then(setLetterIndex);
    }, []);
    
    if (!letterIndex) return <p>Loading…</p>;

    console.log(letterIndex);
    return (
        <div className="activity-feed">
            {/* Section Title */}
            <h3 className='section-title'>ACTIVITY FEED</h3>

            {/* Tabs (should make this into a component) */}
            <div className="tab-bar">
                <div className="tabs">
                    <div className="tab">
                        <a href="" className="tab-link true">Letters</a>
                        <span className="number">{letterIndex.length}</span>
                    </div>
                    <div className="tab">
                        <a href="" className="tab-link false">Todos</a>
                        <span className="number">0</span>
                    </div>
                </div>
            </div>

            {/* Letters Index */}
            <div className="activity-feed">
                {letterIndex.map(letter => (
                    <div className="activity">
                        <div className='content'>
                            <img src={profileIcon} alt="profile icon" className="icon-logo" />
                            <div className="content">
                                <p className="activity-content"><strong>User Name</strong> sent <strong>{letter.title}</strong>!</p>
                                <p className='time-mark'>1h ago</p>
                            </div>
                        </div>
                        <button className="view">View</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { ActivityFeed };