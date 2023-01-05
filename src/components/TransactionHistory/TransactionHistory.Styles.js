import styled from '@emotion/styled';

export const TableTransHistStyles = styled.div`
  margin: 50px;
  margin-bottom: 20px;
  width: 400px;
`;
export const BackgroundTabl = styled.tr`
  background-color: #fff;

  :nth-of-type(even) {
    background-color: #ecf1f3;
  }
  :hover {
    background-color: orange;
    font-weight: 800;
  }
`;
export const HeaderTabl = styled.th`
  background-color: #00bcd5;
  color: white;
  width: 30px;
  text-align: center;
  border: 1px solid black;
  width: 150px;
`;
export const BodyTabl = styled.th`
  text-align: center;
  font-weight: 400;
  border: 1px solid black;
  width: 150px;
`;
