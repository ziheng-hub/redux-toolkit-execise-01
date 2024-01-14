import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "ago";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);

    return (
      <div>
        投稿時間: {timePeriod} {timeAgo}
      </div>
    );
  }
  
};
