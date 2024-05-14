import { parseZonedDateTime, now, getLocalTimeZone } from "@internationalized/date"

export function convertZonedDateTimeToISOString(ZonedDateTime){

    if(ZonedDateTime !== ''){
        return new Date(parseZonedDateTime(ZonedDateTime).toAbsoluteString()).toISOString()
    }
    else{
        return null
    }
}