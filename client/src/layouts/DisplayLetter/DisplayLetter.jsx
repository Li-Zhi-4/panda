import './DisplayLetter.css'

import { SideNavigation } from '../../components/SideNavigation/SideNavigation';
import { Letter } from '../../components/Letter/Letter';
import { Tabs } from '../../components/Tabs/Tabs';

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