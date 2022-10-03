let numero = randint(5, 10)
basic.showNumber(numero)
for (let index = 0; index <= numero; index++) {
    basic.showNumber(index)
    for (let index2 = 0; index2 < index; index2++) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        basic.pause(500)
    }
}
basic.showString("A buscar!!!")
music.playMelody("G B A G C5 B A B ", 120)
basic.forever(function () {
	
})
