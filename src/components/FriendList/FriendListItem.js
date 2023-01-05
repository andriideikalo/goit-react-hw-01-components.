import PropTypes from 'prop-types';
import { FrendItemStyles } from './FriendListStyles';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FrendItemStyles>
      <li className="item">
        <span id={isOnline ? 'online' : 'notonline'}>{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </FrendItemStyles>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
