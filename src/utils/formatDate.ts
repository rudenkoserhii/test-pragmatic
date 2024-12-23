// src/utils/formatDate.ts

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
    if (date > oneWeekAgo) {
      // If within the last week, return the day name
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
    } else {
      // For dates older than a week, return the formatted date
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
    }
  }
  