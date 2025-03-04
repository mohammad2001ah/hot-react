const Todos=({todos})=>(
  <ul>
    {
      todos.map((y,index)=>
        <li key={index}>{y}</li>
      )
    }
  </ul>
)
export default Todos;