import styled from '@emotion/styled';

export const FrendStyles = styled.div`
  background-color: #fff;
  width: 400px;
  position: relative;
  margin: 50px;
  padding: 0;
`;
export const StatusFriend = styled.div`
  #online {
    width: 20px;
    height: 20px;
    background: green;
    border-radius: 50px;
  }

  #notonline {
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50px;
  }
`;

export const ItemFriends = styled.li`
  display: flex;
  padding: 10px;
  gap: 16px;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 5px 17px #8d8d8d, -5px -5px 17px #ffffff;
  transition-duration: 250ms;

  :hover,
  :focus {
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 1), 0px 1px 25px rgba(0, 0, 0, 1),
      0px 2px 25px rgba(0, 0, 0, 0.12);
    transform: scale(1.1);
    transition-duration: 250ms;
    outline: none;
  }
`;
export const AvatarFriends = styled.img`
  display: block;
  width: 80px;
`;
export const AvatarName = styled.p`
  font-weight: 800;
  margin-bottom: 10px;
`;
