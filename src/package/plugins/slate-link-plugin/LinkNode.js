import React, { Component } from 'react'
import { hasLinks, unlink } from './LinkUtils'
import Tooltip from '../../components/tooltip'
import LinkDataModal from './LinkDataModal'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./LinkNode.css')

class LinkNode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalActive: false,
      mounted: false,
      presetData: { text: '' }
    }
  }

  modal(isModalActive) {
    this.setState({ isModalActive })
  }

  componentDidMount() {
    const { node } = this.props

    if (node.data.get('openModal')) this.modal(true)

    this.setState({
      presetData: { text: this.text.innerText },
      mounted: true,
    })
  }

  componentWillUpdate(props, state) {
    if (state.mounted && state.presetData.text !== this.text.innerText) {
      this.setState({
        presetData: { text: this.text.innerText }
      })
    }
  }

  render() {
    const { isModalActive, presetData } = this.state
    const { children, attributes, state, node, readOnly, editor: { onChange } } = this.props

    return (
      <span>
        {!isModalActive ? null : (
          <LinkDataModal
            node={node}
            state={state}
            onChange={onChange}
            changeModalState={this.modal.bind(this)}
            presetData={presetData}
          />
        )}

        <span className="link-node-container">
          {!readOnly && (
            <Tooltip style={{ display: hasLinks(state) ? 'block' : 'none' }}>
              <Tooltip.Item>
                <a href={node.data.get('url')} target="_blank">
                  {node.data.get('url')}
                </a>
              </Tooltip.Item>
              <Tooltip.Item onClick={() => this.modal(true)}>
                Edit
              </Tooltip.Item>
              <Tooltip.Item onClick={() => onChange(unlink(state))}>
                Unlink
              </Tooltip.Item>
            </Tooltip>
          )}
          <a
            {...attributes}
            className="link-node"
            href={node.data.get('url')}
            target={node.data.get('openExternal')}
            title={node.data.get('title')}
            ref={text => {this.text = text}}
          >
            {children}
          </a>
        </span>
      </span>
    )
  }
}

export default LinkNode
