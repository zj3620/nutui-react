import React from 'react'
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom'
import './App.scss'
// import remarkGfm from 'remark-gfm'
// import { routers, raws } from './docs'
import { visit } from 'unist-util-visit'
// import ReactMarkdown from 'react-markdown'
import Nav from '@/sites/doc/components/nav'
// import remarkDirective from 'remark-directive'
import Header from '@/sites/doc/components/header'
// import Demoblock from '@/sites/doc/components/demoblock'
import DemoPreview from '@/sites/doc/components/demo-preview'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import ThemeSetting from '@/sites/doc/components/theme-setting'

function myRemarkPlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        if (node.name !== 'demo') return

        const data = node.data || (node.data = {})

        data.hName = 'div'
        data.hProperties = {
          class: 'nutui-react--demo-wrapper',
        }
      }
    })
  }
}

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="doc-content">
          <div className="doc-content-document">
            <ThemeSetting></ThemeSetting>
          </div>
          <div className="markdown-body">
            <DemoPreview></DemoPreview>
          </div>
        </div>
      </HashRouter>
    </div>
  )
}
export default App
