import React, { Component } from 'react'
import snowman_step_0 from './images/step_0.png'
import snowman_step_1 from './images/step_1.png'
import snowman_step_2 from './images/step_2.png'
import snowman_step_3 from './images/step_3.png'
import snowman_step_4 from './images/step_4.png'
import snowman_step_5 from './images/step_5.png'
import snowman_step_6 from './images/step_6.png'
import snowman_step_7 from './images/step_7.png'
import words from './words.json'
import './App.css'
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)

    let randomIndex = Math.floor(Math.random() * 1024)

    this.alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]

    this.snowmen = [
      snowman_step_0,
      snowman_step_1,
      snowman_step_2,
      snowman_step_3,
      snowman_step_4,
      snowman_step_5,
      snowman_step_6,
      snowman_step_7
    ]

    this.state = {
      secretWord: words[randomIndex],

      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false
    }
    console.log(words[randomIndex])
  }

  shouldShowLetter = letter => {
    // if we should not show the letter, return _

    // if lettersChosen doeS contain letter
    // then return an letter
    if (this.isLetterAlreadyChosen(letter)) {
      return letter
    }

    // If we should show the letter, return '_'
    return '_'
  }

  letterClicked = event => {
    console.log(event.target.value)

    const letter = event.target.value

    if (this.isLetterAlreadyChosen(letter)) {
      return
    }

    // Tell react that the state has changed
    this.setState({
      [letter]: true
    })
  }

  // return the snowman to show
  whichSnowman = () => {
    const lettersAlreadyChosen = this.alphabet.filter(
      letter => this.state[letter]
    )

    const howManyLettersChosen = lettersAlreadyChosen.length

    if (howManyLettersChosen > 7) {
      return this.snowmen[7]
    } else {
      return this.snowmen[howManyLettersChosen]
    }
  }

  isLetterAlreadyChosen = letter => {
    return this.state[letter]
  }

  render() {
    return (
      <div className="App">
        <h1>Do you want to build a Snowman?</h1>

        <img src={this.whichSnowman()} alt="snowman" />
        <ul>
          {this.state.secretWord.split('').map((letter, index) => {
            return <li key={index}>{this.shouldShowLetter(letter)}</li>
          })}
        </ul>

        <div className="Alphabet">
          {this.alphabet.map((letter, index) => {
            return (
              <Button
                key={index}
                letter={letter}
                disabled={this.isLetterAlreadyChosen(letter)}
                letterClicked={this.letterClicked}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
