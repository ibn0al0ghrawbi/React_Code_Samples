import classes from './Card.module.css';

const Card = (props) => { //children can access everything between the "Card"-Tags in AddUser
   return <div className={`${classes.card} ${props.cssClass}`}>{props.children}</div>;
};
//makes sure to use the Card.css plus the AddUser.css which is delivered by "props" and called by .cssClass
export default Card;