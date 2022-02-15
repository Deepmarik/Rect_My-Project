import React from 'react'
export class Button extends React.Component {
    render() {
        return (
            <>
                <h3>Portugal {this.props.text}</h3>
                <button>Button</button>
            </>
        )
    }
}
