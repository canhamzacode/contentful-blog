import { formatDate } from "@/lib/utils";


function DateComponent({ dateString }) {
    try {
        const formattedDate = formatDate(dateString, { year: 'numeric', month: 'long', day: 'numeric' });
        return <time dateTime={dateString}>{formattedDate}</time>;
    } catch (error) {
        console.error(error);
        return <time dateTime={dateString}>Invalid Date</time>;
    }
}

export default DateComponent;