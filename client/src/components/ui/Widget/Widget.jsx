import styles from './Widget.module.css';

/**
 * @typedef {Object} WidgetProps
 * @prop {React.ReactNode}                      children        
 * @prop {string}                               title           title of the widget container
 * @prop {string}                               [width]         sets width property of widget container, default is 100%
 * @prop {string}                               [height]        sets height property of widget container, default is fit-content
 * @prop {'light-theme'|'dark-green-theme'}     [theme]         sets theme of widget
 * @prop {boolean}                              [showToggle]    displays the Day/Month/Year toggle, cannot display without a title
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
            {title && <div className={styles['title-section']}>
                {title && <h1 className={styles['title-h1']}>{title.toUpperCase()}</h1>}
                {showToggle && <div className={styles['title-toggle']}>Day</div>}
            </div>}
            {children}
        </div>
    );
}

export { Widget };