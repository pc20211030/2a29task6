let F = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    F += 32 + 1.8 * input.temperature()
    basic.showNumber(F)
})
