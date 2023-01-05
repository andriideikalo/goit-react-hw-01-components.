import PropTypes from 'prop-types';
// import React from 'react';
import { ProfStyles } from './Profile.Styles';
import { DescriptionStyles } from './Profile.Styles';
import { StatsStyles } from './Profile.Styles';
import { Avatar } from './Profile.Styles';
import { Tag } from './Profile.Styles';
import { Location } from './Profile.Styles';
import { Name } from './Profile.Styles';
import { Quantity } from './Profile.Styles';
import { Label } from './Profile.Styles';
import { StatsItem } from './Profile.Styles';

export const Profile = ({ users }) => {
  return (
    <ProfStyles>
      <DescriptionStyles>
        <Avatar src={users.avatar} alt="User avatar" className="avatar" />
        <Name>{users.username}</Name>
        <Tag>@{users.tag}</Tag>
        <Location>{users.location}</Location>
      </DescriptionStyles>
      <StatsStyles>
        <StatsItem>
          <Label>Followers </Label>
          <Quantity>{users.stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views </Label>
          <Quantity>{users.stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes </Label>
          <Quantity>{users.stats.likes}</Quantity>
        </StatsItem>
      </StatsStyles>
    </ProfStyles>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
