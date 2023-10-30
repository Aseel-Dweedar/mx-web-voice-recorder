// format time to minutes and seconds from the second mount
export const getTimeFormat = seconds => {
    const currMinutes = Math.floor(seconds / 60);
    const currSeconds = Math.floor(seconds - currMinutes * 60);

    return `${currMinutes <= 9 ? "0" + currMinutes : currMinutes}:${
        currSeconds <= 9 ? "0" + currSeconds : currSeconds
    }`;
};
