import './DisplayLetter.css'

import { SideNavigation } from '../../SideNavigation/SideNavigation';
import { Letter } from '../../Letter/Letter';
import { Tabs } from '../../Tabs/Tabs';

function DisplayLetter() {
    return (
        <div className="layout">
            <SideNavigation />
            <div className="content">
                <div className="box">
                    <Tabs />
                    <Letter id={32} />
                </div>
            </div>
        </div>
    );
}

export { DisplayLetter };