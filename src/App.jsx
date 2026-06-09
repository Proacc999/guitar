import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Liff Demo</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to open url
        </button>

         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to open window
        </button>

         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to open external para stem
        </button>
      </div>

      <div>
       <div>
        <div>
          <h3>For Le</h3>
        </div>
        <div>
          <h3>For Ri</h3>
        </div>
       </div>
      </div>
     
    </div>
  )
}

export default App


