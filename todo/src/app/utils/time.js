import { parseZonedDateTime, now, getLocalTimeZone } from "@internationalized/date"

export function convertZonedDateTimeToISOString(ZonedDateTime){

    const dateString = ZonedDateTime !== ''? ZonedDateTime:now(getLocalTimeZone()).toString()

    return new Date(parseZonedDateTime(dateString).toAbsoluteString()).toISOString()
}