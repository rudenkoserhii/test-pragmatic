
const TIMEZONE = 'en-US';
const DATE_TYPE = 'numeric';
const TODAY = 'Today';
const DAY_BEFORE = 1;
const YESTERDAY = 'Yesterday';
const WEEK = 7;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MS_IN_DAY = 24 * 60 * 60 * 1000;

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - WEEK * MS_IN_DAY);
  const yesterday = new Date(now.getTime() - DAY_BEFORE * MS_IN_DAY);
  if (now.getDate() === date.getDate()) {
    return TODAY;
  }
  else if (yesterday.getDate() === date.getDate()) {
    return YESTERDAY;
  }
  else if (date > oneWeekAgo) {
    return DAYS[date.getDay()];
  } else {
    return date.toLocaleDateString(TIMEZONE, { year: DATE_TYPE, month: DATE_TYPE, day: DATE_TYPE });
  }
}
