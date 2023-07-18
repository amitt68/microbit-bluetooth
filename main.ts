basic.forever(function () {
    basic.showLeds(`
        # # . . .
        # . # . .
        # . . # .
        # . . . #
        # # # # #
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
