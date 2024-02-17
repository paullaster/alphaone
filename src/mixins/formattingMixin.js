export default {
    formatDuration(param) {
        const paramArray = param.split('');
        const duration = paramArray.at(-1);
        switch (duration) {
            case 's':
                paramArray.pop();
                return `${paramArray.join('')}seconds`;
        }
    }

}