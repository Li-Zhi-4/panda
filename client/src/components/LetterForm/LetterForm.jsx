import './LetterForm.css'

const API_BASE = import.meta.env.VITE_API_URL;

function LetterForm() {

    return (
        <form action={`${API_BASE}/api/letters/`} method='post' className='letter-form'>
            <div className="letter">
                <div className="letter-content written-content">
                    <input type="text" name="title" id="title" placeholder='Title...' required /> {/* Replaced: <h1>{letter.title}</h1> */}

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

                    <textarea name="content" id="content" placeholder='Write here...'required></textarea> {/* Replaced: <span className='p content'>{letter.content}</span> */}
                </div>

                <div className="letter-content">
                    <div className="divider-horizontal"></div>
                    <div className="letter-nav">
                        <div className="nav">
                            <a href="">Cancel</a>
                        </div>
                        <div className="divider-vertical"></div>
                        <div className="saved">
                            Last <a href="">saved</a> 2 seconds ago.
                        </div>
                        <div className="divider-vertical"></div>
                        <div className="nav">
                            <button type="submit" className='send'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export { LetterForm };