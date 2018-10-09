import * as React from 'react'
import * as styles from "./Hello.styles"

import { DatePicker } from 'antd';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

export class Hello extends React.PureComponent<IProps, { showInstallMessage: boolean }> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            showInstallMessage: false 
        }
    }
    componentDidMount() {
        // whole componentDidMount body serves the purpose
        // of checking if popup message to add homeScreen button ***on iOS*** should be displayed
        // iOS support for PWA is worse than bad, hence we need to hack it
        // read more here:
        // https://www.netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native
        // beware, that popup itself is NOT implemented in this boilerplate app.
        const isIos = () => {
            return /iphone|ipad|ipod/.test(
                window.navigator.userAgent.toLowerCase()
            );
        }
          // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && ((window.navigator as any).standalone);
          
          // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.setState({ showInstallMessage: true });
        }
    }
    
    render() {
        const { showInstallMessage } = this.state

        return <React.Fragment>
            <h1 className={styles.hello}>
                Hello, this is your awesome boilerplate! A {` ${this.props.framework} `}
                application using {` ${this.props.compiler} `}
                with {` ${this.props.bundler} `}
            </h1>
            <div>
            { 
                showInstallMessage && 
                <div>
                    You can add that app to your homescreen {/*your popup should go here*/}
                </div>
            }
            <DatePicker /> { /*just testing Ant UI element*/}
            </div>
        </React.Fragment>
    }
}
