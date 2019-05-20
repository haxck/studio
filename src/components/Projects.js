import React from 'react'
import '../css/tailwind.css'
import Card from './Card'


function Projects() {
  return (
    <div className="container flex flex-wrap mx-auto pb-5">
      <Card color="bg-blue-400" title="Echo" content="书信风格长文本生成器。 " link="http://haxck.com" linkName="查看项目"></Card>
      <Card color="bg-green-400" title="NightMate" content="白噪音小程序。困意来袭，无需选择，一键开始入睡。辗转反侧，夜读陪你慢慢长夜。" link="http://haxck.com" linkName="查看项目"></Card>
    </div>
)
}

export default Projects