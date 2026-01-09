input.onButtonPressed(Button.A, function () {
    basic.showNumber(Moisture)
    basic.showNumber(input.lightLevel())
    basic.showNumber(input.temperature())
})
let Moisture = 0
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + Moisture + "," + input.lightLevel() + "," + input.temperature())
    basic.pause(1000)
})
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogReadWritePin.P1)
    if (Moisture <= 300) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        if (Moisture <= 600) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
})
