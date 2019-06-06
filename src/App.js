import React from 'react';
import './App.css';
import Logo from './components/Logo'
import Projects from './components/Projects'
import Footer from './components/Footer'



function App() {
  const data = [
    { title: "Echo", content: "书信风格长文本生成器。", link: "https://github.com/haxck/echo", linkName: "Github" },
    { title: "NightMate", content: "白噪音小程序。困意来袭，无需选择，一键开始入睡。辗转反侧，夜读陪你漫漫长夜。", link: "https://haxck.com/lite-program-nightmate/", linkName: "查看详情" },
  ]
  return (
    <div className="App">
      <Logo />
      <Projects data={data} />
      <Footer />
    </div>
  );
}

export default App;
