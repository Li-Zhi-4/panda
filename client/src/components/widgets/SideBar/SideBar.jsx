import { useState } from 'react';
import styles from './SideBar.module.css';
import { Widget } from '../../ui/Widget/Widget';

function SideBar() {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const tabs = {
        'Dashboard': '/src/assets/home-icon-1.svg',
        'Letters': '/src/assets/letter-icon-1.svg',
        'Settings': '/src/assets/settings-icon-1.svg'
    }

    return (
        <Widget width='250px' height='auto'>
            <div className={styles.sidebar}>
                {Object.entries(tabs).map( ([key, value]) => (
                    <button 
                        key={key}
                        aria-selected={key === activeTab}
                        className={key === activeTab ? `${styles['sidebar-button']} ${styles['selected-tab']}` : `${styles['sidebar-button']} ${styles['unselected-tab']}`}
                        onClick={() => setActiveTab(key)}
                    >
                        <img className={styles['sidebar-img']} src={value} alt="dashboard button" />
                        <p>{key}</p>
                    </button>
                ))}
            </div>
        </Widget>
    );
}

export { SideBar };