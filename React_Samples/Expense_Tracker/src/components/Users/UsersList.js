import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card cssClass={styles.users}> {/*is overridden in Card */}
            <ul>
                {props.items.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;

