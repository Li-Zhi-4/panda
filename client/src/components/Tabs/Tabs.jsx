import './Tabs.css'

import pandaLogo from '/src/assets/panda-icon.svg'

function Tabs() {

    return (
        <div className="tab-bar">
            <img src={pandaLogo} alt="panda logo" className='logo'/>
            <div className="tabs">
                <div className="tab">
                    <a href="" className="tab-link true">Tab 1</a>
                </div>
                <div className="tab">
                    <a href="" className="tab-link false">Tab 2</a>
                </div>
            </div>
        </div>
    );
}

export { Tabs };