import { formatDistanceToNowStrict } from "date-fns";

export const timeAgo = (date: string | Date): string => {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
};
