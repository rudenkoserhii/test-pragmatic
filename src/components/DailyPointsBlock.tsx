import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface DailyPointsProps {
  points: number;
}

const DailyPointsBlock: React.FC<DailyPointsProps> = ({ points }) => {
  // Format points to 'K' if over 1000
  const formattedPoints = points >= 1000 ? `${(points / 1000).toFixed(0)}K` : points.toString();

  return (
    <div className='bg-white rounded-lg p-4 mb-4 w-full h-1/2 flex justify-center flex-col'>
      <h3>Daily Points</h3>
        <p className='text-[--background]'>{formattedPoints}</p>
    </div>
  );
};

export default DailyPointsBlock;