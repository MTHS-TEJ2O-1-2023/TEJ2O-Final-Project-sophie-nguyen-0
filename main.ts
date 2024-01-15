/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: Jan 2024
 * This program turns bottle caps.
*/


// variables
let distance: number = 0

// setup
basic.clearScreen()
radio.setGroup(5)
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// receive message
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)

  // spin broom thingy
  robotbit.StpCarMove(-10, 48)
  basic.pause(500)
  robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
  basic.pause(500)
  robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
  basic.pause(500)
  robotbit.StpCarMove(10, 48)

  //sonar - edge detection
  distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters) 
})
