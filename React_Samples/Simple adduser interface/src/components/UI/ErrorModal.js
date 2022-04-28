import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = props => {
    return <Card cssClass={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
        </footer>
    </Card>
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop
                    onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))
                //backdrop-root in public/index.html
                } 

            {ReactDom.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    );
};

export default ErrorModal;

/**
 * React has all the libraries like States, Hooks 
 * and so on and React-Dom brings all this features to the screen in the webbrowser
 * 
 * createPortal: first argument is the content and 2nd argument is a pointer where the content should be rendered.
 * So that in bigger projects the error modal is not rendered deep nested beneath some other content,
 * we want to make sure it is rendered next to the body-root. I created 2 root-divs in public/index.html to point at them 
 */