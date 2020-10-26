function Collision (S1: game.LedSprite, S2: game.LedSprite) {
    if (S1.isTouching(S2)) {
        game.addScore(Tscore)
        Tscore = 0
        return true
    }
    return false
}
function MoveTie (Tf: game.LedSprite) {
    Tf.turn(Direction.Right, randint(-45, 45))
    Tf.move(tspeed)
    Tf.ifOnEdgeBounce()
    basic.pause(100)
    if (Collision(xwing, Tf)) {
        game.removeLife(1)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    xwing.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.B, function () {
    xwing.move(1)
    xwing.ifOnEdgeBounce()
    if (xwing.isTouchingEdge()) {
        Tscore += 5
    }
})
let tspeed = 0
let xwing: game.LedSprite = null
let Tscore = 0
Tscore = 0
images.createBigImage(`
    . . # # # . . . . .
    . . . # . . . . . .
    # # # # . . . . . .
    . . . # . . . . . .
    . . # # # . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    # # # . . . . . . .
    . # . . . . . . . .
    # # # . # # # . . .
    . . . . . # . . . .
    . . . . # # # . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . # # # . . . . .
    . . . # . . . . . .
    # # # # # . . . . .
    . . . # . . . . . .
    . . # # # . . . . .
    `).scrollImage(1, 200)
game.setLife(5)
xwing = game.createSprite(2, 2)
let xspeed = 1
tspeed = 1
let tie = game.createSprite(4, 0)
let Tie2 = game.createSprite(0, 4)
while (!(game.isGameOver())) {
    MoveTie(tie)
    MoveTie(Tie2)
}
