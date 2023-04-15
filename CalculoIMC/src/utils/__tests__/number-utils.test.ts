import { formatNumber } from "../number-utils"

describe('when formatting number', () => {

    describe('and the number has integer and decimal parts', () => {

        test('formats the number correctly', () => {
            const result = formatNumber(123.45)
            expect(result).toEqual("123,5")
        })

    })

    describe('and the number has only decimal part', () => {

        test('formats the number correctly', () => {
            const result = formatNumber(0.32)
            expect(result).toEqual("0,3")
        })

    })
})


