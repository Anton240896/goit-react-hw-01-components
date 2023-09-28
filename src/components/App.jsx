import user from 'data/user.json';
import data from 'data/data.json';
// import friends from 'data/friendList.json';
// import transactions from 'data/transactions.json';
import { Profile } from 'components/Profile/profile.jsx';
import { Statistics } from 'components/Statistics/statistics.jsx';
// import { FriendList } from 'components/FriendList/friendList.jsx';
// // import { FriendListItem } from 'components/FriendListItem/friendListItem.jsx';
// import { TransactionHistory} from 'components/TransactionHistory/transactionHistory.jsx';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.container}>
        <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      
     <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
      </div>
      
    );
  };