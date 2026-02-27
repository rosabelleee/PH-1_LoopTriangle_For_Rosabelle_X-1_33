music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
let x = [
0,
1,
2,
3,
0,
1,
2,
3,
4
]
let y = [
0,
1,
1,
1,
2,
2,
2,
2,
2
]
basic.forever(function () {
    for (let i = 0; i <= x.length - 1; i++) {
        led.plot(x[i], y[i])
        basic.pause(500)
        basic.clearScreen()
    }
})
