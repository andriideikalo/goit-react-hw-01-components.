import styled from '@emotion/styled';

export const ProfStyles = styled.div`
  border: 1px solid lightgray;
  background-color: #fff;
  width: 400px;
  height: 500px;
  position: relative;
  padding-top: 20px;
  margin: 50px;
  transition-duration: 250ms;

  :hover,
  :focus {
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1),
      0px 1px 25px rgba(0, 0, 0, 0.08), 0px 2px 25px rgba(0, 0, 0, 0.12);
    transform: scale(1.1);
    transition-duration: 250ms;
    outline: none;
  }

  ul {
    padding: 0;
  }
`;
export const DescriptionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
`;

export const StatsStyles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Avatar = styled.img`
  display: block;
  width: 300px;
  border-radius: 50%;
  margin-bottom: 30px;
`;
export const Tag = styled.p`
  font-weight: 800;
  color: blue;
  cursor: pointer;
  padding-bottom: 10px;
`;
export const Location = styled.p`
  color: grey;
`;
export const Name = styled.p`
  font-weight: 800;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;
export const Quantity = styled.span`
  display: block;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
`;
export const Label = styled.span`
  display: block;
  font-size: 18px;
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;
  color: grey;
`;
export const StatsItem = styled.li`
  padding: 10px;
  width: 100px;
  border: 1px solid #e7ecf2;
  background-color: #f3f6f9;
`;
