import './App.css';
import user from './data/user.json'
import transactionItems from './data/transactions.json'
import { Profile } from './Components/Profile/Profile';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory';
// console.log(user);

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
      <TransactionHistory items={transactionItems}/>
    </div>    
  );
}

export default App;
