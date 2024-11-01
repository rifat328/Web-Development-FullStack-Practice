import React from 'react'

export const JSXRules = (props) => {
  return (
    <div style={props.style}>
        <h1>JSX Rules</h1>
        <p>
            <ol>
                <li>JSX must return a single Parent Element.</li>
                <li>JSX element must be properly closed</li>
                <li>jsx attribute are written using camelCase (e.g, className inted of class )</li>

            </ol>
        </p>
    </div>
  )
}
