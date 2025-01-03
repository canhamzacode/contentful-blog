export function formatDate(dateString, options) {
    const date = new Date(dateString);
    if (isNaN(date)) {
        throw new RangeError('Invalid time value');
    }
    const { format } = new Intl.DateTimeFormat('en-US', options);
    return format(date);
}