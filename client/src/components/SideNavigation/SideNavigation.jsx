import './SideNavigation.css'

import homeIconFull from '/src/assets/home-icon-2.svg'
import homeIconLine from '/src/assets/home-icon-1.svg'
import letterIconFull from '/src/assets/letter-icon-2.svg'
import letterIconLine from '/src/assets/letter-icon-1.svg'
import settingsIconFull from '/src/assets/settings-icon-2.svg'
import settingsIconLine from '/src/assets/settings-icon-1.svg'
import profileIcon from '/src/assets/profile-icon.svg'

function SideNavigation() {

    return (
        <div className='side-nav'>
            <div className="options">
                <a href="" className="home link">
                    <img src={homeIconFull} alt="" className="icon" />
                </a>
                <a href="" className="letters link">
                    <img src={letterIconLine} alt="" className="icon" />
                </a>
                <a href="" className="settings link">
                    <img src={settingsIconLine} alt="" className="icon" />
                </a>
            </div>
            <img src={profileIcon} alt="" className="profile" />
        </div>
    );
}

export { SideNavigation };