import { FormattedPoints } from '@/types';

export function formatPoints(points: number): FormattedPoints {
  if (points >= 1000) {
    return `${(points / 1000).toFixed(0)}K`;
  }
  return points.toString();
}