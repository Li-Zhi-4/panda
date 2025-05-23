import styles from './Widget.module.css';

/**
 * @typedef {Object} WidgetProps
 * @prop {React.ReactNode}                      children
 * @prop {string}                               title
 * @prop {string}                               [width]
 * @prop {string}                               [height]
 * @prop {'light-theme'|'dark-green-theme'}     [theme]
 * @prop {boolean}                              [showToggle]
 */

/**
 * A widget container that wraps dashboard content.
 * 
 * @param {WidgetProps} props
 * @returns {JSX.Element}
 */
function Widget({ children, title, width = '100%', height = 'fit-content', theme = 'light-theme', showToggle = true }) {

    return (
        <div className={`${styles.widget} ${styles[theme]}`} style={{'--widget-width': width, '--widget-height': height}}>
            <div className={styles['title-section']}>
                <h1 className={styles['title-h1']}>{title.toUpperCase()}</h1>
                {showToggle && <div className={styles['title-toggle']}>Day</div>}
            </div>
            {children}
        </div>
    );
}

export { Widget };