import React, { useEffect } from 'react'
import { nav } from '@/config.json'
// @ts-ignore
import { version } from '/package.json'
import './header.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const toHome = () => {
    history.replace('/')
  }
  useEffect(() => {
    let packages = [] as any[]
    nav.forEach((item) => {
      packages.push(...item.packages)
    })
  }, [])

  return (
    <div className="doc-header doc-header-red">
      <div className="header-logo">
        <a className="logo-link react" href="#/" onClick={toHome}></a>
        <span className="logo-border"></span>
        <span className="version">{version}</span>
      </div>
      <div className="header-nav">
        <a href="https//github.com/jdf2e/nutui-docs" target="_blank">
          🌈 视频教程 「一分钟快速实现主题定制」 https://www.bilibili.com/video/BV1fi4y1D7qb
        </a>
      </div>
    </div>
  )
}

export default Header
