# React Konami Code

HOC class decorator which provides `thirtyLives` boolean prop to wrapped component. `thirtyLives` is only true if the Konami Code has just been typed in sequence - one stroke more or less and it is false. Keystrokes are only kept in state while they are in sequence.

Install module as usual then use like any other decorator:
```
import withKonami from 'react-konami-code'

@withKonami
class YourClass extends React.Component {
  ...
  render() {
    const {thirtyLives} = this.props
    ...
  }
}
```

`withKonami(YourClassOrReactFunction)` also works.

This project is not affiliated with or endorsed in any way by the Konami group of companies
