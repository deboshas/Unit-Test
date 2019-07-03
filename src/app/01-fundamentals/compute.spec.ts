import { compute } from './compute'


describe("compute", () => {
    it('negative number test', () => {
        const result = compute(-1);
        expect(result).toBe(0);

    })

    it('Increment input if it is postive', () => {
        const result = compute(1);
        expect(result).toBe(2);

    })

})
