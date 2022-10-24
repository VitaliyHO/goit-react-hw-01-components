import './App.css';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './Components/Profile/Profile';
import { Statistics } from './Components/Statistics/Statistics';
import { FriendList } from './Components/FriendList/FriendList';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
