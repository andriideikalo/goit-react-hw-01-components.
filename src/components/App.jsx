import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';
import friends from '../data/friends';
import users from '../data/users';
import data from '../data/data';

// ffff
export const App = () => {
  return (
    <>
      <Profile users={users} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data}/>; */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
