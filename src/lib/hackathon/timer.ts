// Functions for handling time in a hackathon page
import { parse } from 'date-fns'

/**
 * Converts seconds to days, hours, minutes, and seconds as a string.
 * @param seconds - The number of seconds to convert.
 * @param altFormat - Enables a more human-readable format.
 * @returns The formatted string.
 */
export const secondsToDhms = (seconds: number, altFormat: boolean): string => {
    const negative = seconds < 0
    seconds = Math.abs(seconds)
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)

    if (altFormat) {
        return (
            (d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '') +
            (m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '') +
            (h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '') +
            (s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '0 seconds') +
            (negative ? ' ago' : '')
        )
    }

    return (
        'T' +
        (negative ? ' + ' : ' - ') +
        d.toString().padStart(2, '0') +
        ' : ' +
        h.toString().padStart(2, '0') +
        ' : ' +
        m.toString().padStart(2, '0') +
        ' : ' +
        s.toString().padStart(2, '0')
    )
}

// Defines the start and end time of a hackathon
export interface HackathonTimes {
    startTime: number
    endTime: number
}

/**
 * Sets the start and end time of a hackathon.
 * @param startDateString - The start date of the hackathon in a valid date string format.
 * @param endDateString - The end date of the hackathon in a valid date string format.
 * @param format - The format of the date string (e.g., "MM/dd/yy" or "dd/MM/yy"). By default it's "MM/dd/yy".
 * @returns The start and end time of the hackathon in Unix timestamp format.
 */
export const setTimes = (
    startDateString: string,
    endDateString: string,
    format: string = 'MM/dd/yy'
): HackathonTimes => {
    const start = convertToUnixTimestamp(startDateString, format)
    const end = convertToUnixTimestamp(endDateString, format)

    return {
        startTime: new Date(0).setSeconds(start),
        endTime: new Date(0).setSeconds(end),
    }
}

/**
 * Converts a valid date string to a Unix timestamp.
 * @param dateString - A valid date string (e.g., "5/20/24" or "20/05/24").
 * @param format - The format of the date string (e.g., "MM/dd/yy" or "dd/MM/yy"). By default it's "MM/dd/yy".
 * @returns The Unix timestamp in milliseconds.
 */
const convertToUnixTimestamp = (dateString: string, format: string): number => {
    const date = parse(dateString, format, new Date())

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date string')
    }

    return date.getTime()
}
