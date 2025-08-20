import Heading from './components/Heading'
import About from './components/About'

function App() {

  return (
    <>
      <Heading />
      <About 
        title="About React" 
        short_description="React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes."
      />
      <About 
        title="Why Learn React" 
        short_description="React is popular, has a large community, excellent documentation, and is used by many top companies. It's also great for building modern web applications with reusable components."
      />
    </>
  )
}

export default App
