import profile from 'data/profile.json';
import data from 'data/data.json';
import friends from 'data/friendList.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/Profile/profile.jsx';
import { Statistics } from 'components/Statistics/statistics.jsx';
import { FriendList } from 'components/FriendList/friendList.jsx';
import { TransactionHistory } from 'components/TransactionHistory/transactionHistory.jsx';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
