import React, { useState } from "react"
import data from "./data"
import List from "./List"
function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section>
        <h1>{people.length} Birthdays Today</h1>
        <List people={people} />
      </section>
      <button onClick={() => setPeople([])}>clear list</button>
    </main>
  )
}

export default App
