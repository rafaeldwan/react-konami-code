import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

export default function withKonami(WrappedComponent) {
  /**
   * it would be easy to enable an argument
   * setting a different keycode string code here
   * but why would anyone ever do that?
  */
  const UP_UP_DOWN_DOWN_LEFT_RIGHT_LEFT_RIGHT_A_B = '38384040373937396665'

  class KonamiListener extends React.PureComponent {
    state = {
      workingString: '',
      thirtyLives: false,
    }

    handleKeyDown = ({keyCode}) => {
      const testString = `${this.state.workingString}${keyCode}`

      if (testString === UP_UP_DOWN_DOWN_LEFT_RIGHT_LEFT_RIGHT_A_B)
        return this.setState({workingString: '', thirtyLives: true})
      if (UP_UP_DOWN_DOWN_LEFT_RIGHT_LEFT_RIGHT_A_B.indexOf(testString) === 0)
        return this.setState({workingString: testString})
      return this.setState({workingString: '', thirtyLives: false})
    }


    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown00)
    }

    render() {
      const {thirtyLives} = this.state
      return <WrappedComponent thirtyLives={thirtyLives} {...this.props} />
    }
  }

  function getDisplayName() {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  hoistNonReactStatic(KonamiListener, WrappedComponent)
  KonamiListener.displayName = `KonamiListener(${getDisplayName(WrappedComponent)}`
  return KonamiListener
}
