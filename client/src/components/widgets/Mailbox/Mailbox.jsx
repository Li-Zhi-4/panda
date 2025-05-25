import { useState, useEffect, useMemo } from 'react';
import styles from './Mailbox.module.css';
import { Widget } from '../../ui/Widget/Widget';

const API_BASE = import.meta.env.VITE_API_URL;
const LETTERS_PER_PAGE = 3;

async function fetchData() {
    const res = await fetch(`${API_BASE}/api/letters/`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}

function Mailbox() {
    const [letterIndex, setLetterIndex] = useState(null);       // Records the data collected from fetchData()
    const [currentPage, setCurrentPage] = useState(1);          // Records current 'page' for displaying letters

    useEffect(() => { 
        fetchData().then(setLetterIndex);
    }, []);
    
    if (!letterIndex) return <p>Loading…</p>;

    const totalPageCount = Math.ceil(letterIndex.length / LETTERS_PER_PAGE);
    const start = (currentPage - 1) * LETTERS_PER_PAGE;
    const displayedLetters = letterIndex.slice(start, start + LETTERS_PER_PAGE);

    return (
        <Widget title='Mailbox' >
            {/* Letters Table */}
            <table className={styles.mailbox}>
                <tbody>
                    {Object.entries(displayedLetters).map( ([id, letter]) => (
                        <tr key={id}>
                            <th>{letter.title}</th>
                            <td>3h</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className={styles.pagination}>
                <button className={styles['pagination-button']} onClick={() => setCurrentPage(prev => prev === 1 ? prev : prev - 1)}>&lt; Back</button>
                <p>{start+1} - {start+LETTERS_PER_PAGE < letterIndex.length ? start+LETTERS_PER_PAGE : letterIndex.length} of {letterIndex.length} results</p>
                <button className={styles['pagination-button']} onClick={() => setCurrentPage(prev => prev === totalPageCount ? prev : prev + 1)}>Next &gt;</button>
            </div>
        </Widget>
    );
}

export { Mailbox };