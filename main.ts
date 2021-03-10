let PhoVal = 0
basic.forever(function () {
    PhoVal = pins.analogReadPin(AnalogPin.P0)
    if (PhoVal < 50) {
        basic.showIcon(IconNames.Heart)
    } else if (PhoVal < 200) {
        basic.showIcon(IconNames.Happy)
    } else if (PhoVal < 500) {
        basic.showIcon(IconNames.Rollerskate)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
