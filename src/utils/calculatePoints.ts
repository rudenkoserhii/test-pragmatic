// src/utils/calculatePoints.ts

import { PointsCalculation, FormattedPoints } from '../types/points.type.ts';

const SEASON_START_DATES = [
  new Date(Date.UTC(new Date().getFullYear(), 2, 1)), // Spring (March 1)
  new Date(Date.UTC(new Date().getFullYear(), 5, 1)), // Summer (June 1)
  new Date(Date.UTC(new Date().getFullYear(), 8, 1)), // Autumn (September 1)
  new Date(Date.UTC(new Date().getFullYear(), 11, 1)) // Winter (December 1)
];

export function getSeasonDay(seasonStart: Date): number {
  const now = new Date();
  const timeDiff = now.getTime() - seasonStart.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff + 1; // Adding 1 because we count from day 1
}

export function calculatePoints({ currentDay, previousDayPoints, dayBeforePreviousPoints }: PointsCalculation): number {
  if (currentDay === 1) {
    return 2; // First day of the season
  } else if (currentDay === 2) {
    return 3; // Second day of the season
  } else {
    // For third and subsequent days
    const points = Math.round((previousDayPoints * 0.60) + dayBeforePreviousPoints);
    return points;
  }
}

export function getDailyPoints(): FormattedPoints {
  const now = new Date();
  const currentSeasonStart = SEASON_START_DATES.find((date) => now >= date);
  
  if (!currentSeasonStart) {
    throw new Error('Current date is before the first season start date of the year');
  }

  const currentDay = getSeasonDay(currentSeasonStart);
  
  // For simplicity, we're assuming previous day points and day before previous points
  // You would need to store or calculate these based on real data or mock data
  let previousDayPoints = 2; // Assuming first day of season
  let dayBeforePreviousPoints = 0; // Before first day

  if (currentDay > 1) {
    previousDayPoints = calculatePoints({ currentDay: currentDay - 1, previousDayPoints: 2, dayBeforePreviousPoints: 0 });
    if (currentDay > 2) {
      dayBeforePreviousPoints = calculatePoints({ currentDay: currentDay - 2, previousDayPoints: 2, dayBeforePreviousPoints: 0 });
    }
  }

  const points = calculatePoints({ currentDay, previousDayPoints, dayBeforePreviousPoints });
  
  // Format points
  return formatPoints(points);
}

function formatPoints(points: number): FormattedPoints {
  if (points >= 1000) {
    return `${(points / 1000).toFixed(0)}K`;
  }
  return points.toString();
}