

const MAX_DAYS_SEASON = 31 + 30 + 31;

export function calculatePoints(): number {

  let points: Record<number, number> = {};
  for (let i = 1; i <= MAX_DAYS_SEASON; i++) {
    if (i === 1) {
      points[i] = 2;
    } else if (i === 2) {
      points[i] = 3;
    } else {
      points[i] = Math.round((points[i - 1] * 0.60) + points[i - 2]);
    }
  }
  
  return points[getSeasonDay()];
}

function getSeasonDay(): number {
  const now = new Date();
  let dayOfSeason: number = 0;
  const seasons = [
    new Date(now.getFullYear(), 2, 1),
    new Date(now.getFullYear(), 5, 1),
    new Date(now.getFullYear(), 8, 1),
    new Date(now.getFullYear(), 11, 1),
  ];

  const firstDayOfTheYear = new Date(now.getFullYear(), 0, 1)
  const lastDayOfTheYear = new Date(now.getFullYear(), 11, 31)

  for (let i = 0; i < seasons.length; i++) {
    if (now < seasons[i] && now > firstDayOfTheYear) {
      dayOfSeason = Math.floor((firstDayOfTheYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    } else if (now >= seasons[i] && now < seasons[i + 1]) {
      dayOfSeason = Math.floor((now.getTime() - seasons[i].getTime()) / (1000 * 60 * 60 * 24)) + 1;
    } else if (now >= seasons[i] && now < lastDayOfTheYear) {
      dayOfSeason = Math.floor((now.getTime() - seasons[i].getTime()) / (1000 * 60 * 60 * 24)) + 1;
    }
  }
  return dayOfSeason;
}