import * as React from 'react'

interface IProps {
    label: string,
}

//implemented just to test that Storybook is working properly
export class Button extends React.PureComponent<IProps, {}> {
    render() {
        return <React.Fragment>
            <button>
                { this.props.label }
            </button>
        </React.Fragment>
    }
}