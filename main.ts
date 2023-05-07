input.onButtonPressed(Button.A, function () {
    count += 1
})
input.onButtonPressed(Button.B, function () {
    count += -1
})
let count = 0
basic.forever(function () {
    if (count >= 3) {
        count = 0
    } else if (count <= -1) {
        count = 2
    }
    if (count == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (count == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (count == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
