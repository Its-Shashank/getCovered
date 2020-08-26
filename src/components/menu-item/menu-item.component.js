import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = (props) => (
  <div className={`${props.section.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}>
    <div className='background-image' style={{backgroundImage: `url(${props.section.imageUrl})`}} />
    <div className='content'>
      <div className='title'>{props.section.title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)
export default withRouter(MenuItem)