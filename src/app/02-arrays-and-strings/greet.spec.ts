import { greet } from './greet';

describe('greet', () => {
    it('should include name in message', () => {

        expect(greet('Debojyoti')).toContain('Welcome Debojyoti');
    })


})