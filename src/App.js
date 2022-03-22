import './App.css';
import Button from './components/Button';
import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';



function App() {

const [openedEditor, setOpenedEditor] = useState('html')
const [html, sethtml] = useState('')
const [css, setcss] = useState('')
const [js, setjs] = useState('')
const [srcDoc, setsrcDoc] = useState(` `)


  useEffect(() => {
    const timeOut = setTimeout(() => {
      setsrcDoc(
        `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
        `
      )
    }, 250);
    return ()=> clearTimeout(timeOut)
}, [html, css, js])
  
const onTabClick = (editorName) => setOpenedEditor(editorName)
  return (
    <div className="App">
      <p>Welcome to the Editor!</p>
      <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
      <Button title="HTML" onClick={()=> onTabClick("html")}/>
      <Button title="CSS" onClick={()=> onTabClick("css")}/>
      <Button title="Javascript" onClick={() => onTabClick("js")} />
      </div>
     
      <div className='editor-container'>
        {openedEditor ? (<Editor
          language='xml'
          value={html}
          setEditorState={sethtml}
        />): openedEditor === 'css' ? (<Editor
          language='css'
          value={css}
          setEditorState={setcss}
        />) :  (<Editor
          language='javascript'
          value={js}
          setEditorState={setjs}
        /> )}
      </div>
      <div>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='1'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default App;
