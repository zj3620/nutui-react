import React, { useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  const [cNav] = useState<any>(nav)

  return (
    <div className="doc-nav">
      <ol>
        <li>全局样式</li>
        <ul>
          <NavLink key={'navlinkbase'} activeClassName="selected" to={'base'}>
            <li>
              <b>基础样式</b>
            </li>
          </NavLink>
        </ul>
      </ol>
      <ol>
        {cNav.map((cn: any) => {
          return (
            <>
              <li key={`li${cn.name}`}>{cn.name}</li>
              <ul key={`ul${cn.name}`}>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null
                  return (
                    <NavLink key={'navlink' + cp.name} activeClassName="selected" to={cp.name}>
                      <li>
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </li>
                    </NavLink>
                  )
                })}
              </ul>
            </>
          )
        })}
      </ol>
    </div>
  )
}

export default Nav
