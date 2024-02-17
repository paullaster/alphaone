export const formattingMixin =  {
    formatDuration(param) {
        const paramArray = param.split('');
        const duration = paramArray.at(-1);
        switch (duration) {
            case 's':
                paramArray.pop();
                return `${paramArray.join('')}second(s)`;
            case 'min':
                paramArray.pop();
                return `${paramArray.join('')}minute(s)`;
            case 'h':
                paramArray.pop();
                return `${paramArray.join('')}hour(s)`;
            case 'd':
                paramArray.pop();
                return `${paramArray.join('')}day(s)`;
            case 'w':
                paramArray.pop();
                return `${paramArray.join('')}week(s)`;
            case 'm':
                paramArray.pop();
                return `${paramArray.join('')}month(s)`;
            case 'y':
                paramArray.pop();
                return `${paramArray.join('')}year(s)`;
            default: return this.toast.info("Invalid duration");
        }
    }
}