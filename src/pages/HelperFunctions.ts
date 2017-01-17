export interface IHelper {
    toDate(from: string, format: string) : Date;
}

export class Helper implements IHelper{
    toDate = function (from: string, format: string) : Date
    {
        let normalized = from.replace(/[^a-zA-Z0-9]/g, '-');
        let normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
        let formatItems = normalizedFormat.split('-');
        let dateItems : any = normalized.split('-');

        let monthIndex = formatItems.indexOf("mm");
        let dayIndex = formatItems.indexOf("dd");
        let yearIndex = formatItems.indexOf("yyyy");
        let hourIndex = formatItems.indexOf("hh");
        let minutesIndex = formatItems.indexOf("ii");
        let secondsIndex = formatItems.indexOf("ss");

        let today = new Date();

        let year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
        let month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
        let day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();

        let hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
        let minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
        let second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();

        return new Date(year, month, day, hour, minute, second);
    };
}