import { formatPoints } from '@/utils';
import { JSX } from 'react';

const DailyPointsBlock = ({ points }: { points: number }): JSX.Element => (
  <div className='bg-white rounded-lg p-4 mb-4 w-full h-1/2 flex justify-center flex-col'>
    <h3>Daily Points</h3>
    <p className='text-[--text-secondary]'>{formatPoints(points)}</p>
  </div>
);

export default DailyPointsBlock;