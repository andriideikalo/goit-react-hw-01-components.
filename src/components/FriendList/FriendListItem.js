import PropTypes from 'prop-types';
import { StatusFriend } from './FriendListStyles';
import { ItemFriends } from './FriendListStyles';
import { AvatarFriends } from './FriendListStyles';
import { AvatarName } from './FriendListStyles';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StatusFriend>
      <ItemFriends>
        <span id={isOnline ? 'online' : 'notonline'}>{isOnline}</span>
        <AvatarFriends src={avatar} alt="User avatar" width="48" />
        <AvatarName>{name}</AvatarName>
      </ItemFriends>
    </StatusFriend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
