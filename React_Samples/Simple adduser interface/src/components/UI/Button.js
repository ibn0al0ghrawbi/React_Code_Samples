import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={styles.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
//props.type sets the type, which is set in the parent (AddUser), as a type of this component. Fallback is 'button'
//props.children outputs what is written between the tags in AddUser ('Add User')
export default Button;