export function getTimeFromSeconds(time: number): [hours: number, minutes: number, seconds: number] {
    const hours = Math.floor(time / 3600);
    const remainingtime = time - hours * 3600;
    const minutes = Math.floor(remainingtime / 60);
    const seconds = remainingtime - 60 * minutes;
    return [hours, minutes, seconds];
}

export function displayTime(time: number) {
    const timeString = String(time).padStart(2, "0");
    return timeString;
}
