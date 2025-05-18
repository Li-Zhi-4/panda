import './LetterForm.css'

const API_BASE = import.meta.env.VITE_API_URL;

function LetterForm() {
    return (
        <form action={`${API_BASE}/api/letters/`} method='post'>
            <label>
                Title: <input type="text" name="title" id="title" required />
            </label>
            <label>
                Content:
                <textarea name="content" id="content" required></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export { LetterForm };