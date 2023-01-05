import styled from '@emotion/styled';

export const StatStyles = styled.section`
  border: 1px solid lightgray;
  background-color: #fff;
  width: 400px;

  position: relative;
  padding-top: 20px;
  margin: 50px;
  transition-duration: 250ms;
`;
export const StatItem = styled.ul`
  padding: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Item = styled.li`
  width: 80px;
  height: 70px;
  color: #fff;
`;
export const Label = styled.span`
  display: block;
  font-weight: 500;
  padding: 10px;
`;
export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
