import { createLogger } from '@lvksh/logger';

export const log = createLogger(
    {
        ok: {label: `[OK]`,newLine: '| ', newLineEnd: '\\-'},
        debug: `[DEBUG]`,
        info: {
            label: `[INFO]`,
            newLine: `⮡`,
            newLineEnd: `⮡`,
        },
        veryBigNetworkError: `[NETWORK]`,
    },
    { padding: "PREPEND"},
    console.log
);