import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import ReactS3Uploader from 'react-s3-uploader'

import { insertInlineImage } from './ImageUtils'

class ImageButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0
    }
  }
  render () {
    const { state, onChange, className, style, signingUrl, outerState } = this.props
    return (
      <div style={{ display: 'inline-block' }}>
        <button
          id={`slate-image-plugin-button-${outerState.uid}`}
          style={{ position: 'relative', ...style }}
          className={className}
          onClick={e => {
            const upload = ReactDOM.findDOMNode(this.upload)
            upload.value = ''
            upload.click()
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${this.state.progress}%`,
            opacity: 0.4,
            backgroundColor: !this.state.error ? '#000' : '#92063E'
          }} />
          <FontAwesome name='image' />
        </button>
        <ReactS3Uploader
          signingUrl={signingUrl}
          accept='image/*'
          onProgress={progress => { this.setState({ progress }) }}
          onError={e => console.error('[SlateEditor][ImagePlugin]:', e)}
          onFinish={e => {
            const src = e.signedUrl.substring(0, e.signedUrl.indexOf('?'))
            onChange(insertInlineImage({ state, src }))
            this.setState({ progress: 0 })
          }}
          ref={input => { this.upload = input }}
          style={{ position: 'absolute', visibility: 'hidden' }}
        />
      </div>
    )
  }
}

export default ImageButton
