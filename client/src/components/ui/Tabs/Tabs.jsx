import styles from './Tabs.module.css';
import { useState } from 'react';

/**
 * NOTES
 * Probably will need React Router for future uses once routing is set up.
 * Will need a way to connect what's selected to the component rendered.
 * Sizing considerations (either controlled by the tab itself or in the container its within).
 */

/**
 * @typedef {Object} TabsProps
 * @prop {Array} tabs       a list of tabs      
 */

/**
 * A tabs UI that displays tab options.
 * 
 * @param {TabsProps} props 
 * @returns {JSX.Element}
 */
function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.tabs}>
            {tabs.map( (tab, id) => (
                <div key={id} className={styles['tab-container']}>
                    <button
                        key={id}
                        aria-selected={id === activeTab}
                        className={id === activeTab ? `${styles.tab} ${styles['selected-tab']}` : `${styles.tab} ${styles['unselected-tab']}`}
                        onClick={() => setActiveTab(id)}
                    >
                        {tab}
                    </button>
                </div>
            ))}
        </div>
    );
}

export { Tabs };