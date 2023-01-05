import PropTypes from 'prop-types';
import { TableTransHistStyles } from './TransactionHistory.Styles';
import { BackgroundTabl } from './TransactionHistory.Styles';
import { HeaderTabl } from './TransactionHistory.Styles';
import { BodyTabl } from './TransactionHistory.Styles';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransHistStyles>
      <thead>
        <BackgroundTabl>
          <HeaderTabl>Type</HeaderTabl>
          <HeaderTabl>Amount</HeaderTabl>
          <HeaderTabl>Currency</HeaderTabl>
        </BackgroundTabl>
      </thead>

      <tbody>
        {items.map(item => (
          <BackgroundTabl key={item.id}>
            <BodyTabl>{item.type}</BodyTabl>
            <BodyTabl>{item.amount}</BodyTabl>
            <BodyTabl>{item.currency}</BodyTabl>
          </BackgroundTabl>
        ))}
      </tbody>
    </TableTransHistStyles>
  );
};
TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
