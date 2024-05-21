import { secondsToDhms, HackathonTimes } from './timer'
import { useEffect, useState } from 'react'

export interface HackathonTimerProps
    extends HackathonTimes,
        React.HTMLAttributes<HTMLDivElement> {}

/**
 * A timer component that counts down to the start or end of a hackathon.
 * Below are the props that can be passed to this component:
 * @param startTime - The start time of the hackathon.
 * @param endTime - The end time of the hackathon.
 * @param divProps - Other props that modifies the returned div element.
 * @returns
 */
export const HackathonTimer: React.FC<HackathonTimerProps> = ({
    startTime,
    endTime,
    ...divProps
}) => {
    const [altFormat, setAltFormat] = useState(false)
    const [countdown, setCountDown] = useState(0)

    const intervalDelayMs = 500
    const remainingStartTimeMs = startTime - Date.now()
    const remainingEndTimeMs = endTime - Date.now()

    useEffect(() => {
        const interval = setInterval(() => {
            remainingStartTimeMs > 0
                ? setCountDown(remainingStartTimeMs)
                : setCountDown(remainingEndTimeMs)
        }, intervalDelayMs)

        return () => clearInterval(interval)
    }, [countdown])

    return (
        <div
            onMouseEnter={() => {
                setAltFormat(true)
            }}
            onMouseLeave={() => {
                setAltFormat(false)
            }}
            {...divProps}
        >
            {`${secondsToDhms(countdown, altFormat)}`}
        </div>
    )
}
