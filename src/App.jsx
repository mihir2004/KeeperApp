import Footer from "./components/Footer"
import Header from "./components/Header"
import Notes from "./components/Note"
import notes from '../src/assets/Notes'

function App() {
  

  return (
    <>
      <Header/>
      {notes.map((note)=>{
        return(
          <Notes 
          key = {note.id}
          title = {note.title}
          content = {note.content}
          />
        )
      })}
      
      <Footer/>
    </>
  )
}

export default App
