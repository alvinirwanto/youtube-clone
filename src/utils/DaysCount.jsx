export default function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);

    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    let timeAgo = diffMinutes + " minute(s) ago";

    if (diffMinutes > 60) {
        if (diffHours <= 1) {
            timeAgo = diffHours + " hour ago";
        } else {
            timeAgo = diffHours + " hours ago";
        }
        if (diffHours > 24) {
            if (diffDays <= 1) {
                timeAgo = diffDays + " day ago";
            } else {
                timeAgo = diffDays + " days ago";
            }
            if (diffDays > 30) {
                const diffMonths = Math.floor(diffDays / 30);
                if (diffMonths <= 1) {
                    timeAgo = diffMonths + " month ago";
                } else {
                    timeAgo = diffMonths + " months ago";
                }
                if (diffMonths > 12) {
                    const diffYears = Math.floor(diffMonths / 12);
                    if (diffYears <= 1) {
                        timeAgo = diffYears + " year ago";
                    } else {
                        timeAgo = diffYears + " years ago";
                    }
                }
            }
        }
    }

    return timeAgo;
}