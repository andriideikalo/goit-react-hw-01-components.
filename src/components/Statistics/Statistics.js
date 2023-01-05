import PropTypes from 'prop-types';
import { FaPercent } from 'react-icons/fa';
import { StatStyles } from './Statistics.Styles';
import { Title } from './Statistics.Styles';
import { Item } from './Statistics.Styles';
import { Label } from './Statistics.Styles';
import { Percentage } from './Statistics.Styles';
import { StatItem } from './Statistics.Styles';
import { getRandomHexColor } from './GetRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatStyles>
      {title && <Title>{title}</Title>}
      <StatItem>
        {stats.map(({ id, label, percentage }) => (
          <Item
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={id}
          >
            <Label>{label}</Label>
            <Percentage>
              {percentage}
              <FaPercent />
            </Percentage>
          </Item>
        ))}
      </StatItem>
    </StatStyles>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.any,
      percent: PropTypes.any,
    })
  ),
};

export default Statistics;
