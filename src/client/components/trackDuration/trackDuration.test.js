import {formatingSongTime} from './trackDuration';

describe('TEST TRACK DURATION', () => {
    it('should format seconds in normal type', () => {
        expect(formatingSongTime(230).toEqual('03:50'))
    })
})