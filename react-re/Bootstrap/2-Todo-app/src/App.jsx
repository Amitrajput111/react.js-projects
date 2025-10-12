import AppName from "./components/AppName";

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
         
        </div><div class="row">
          <div class="col-6">
            Buy milk
          </div>
          <div class="col-4">
            4/10/25
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>  </div><div class="row">
          <div class="col-6">
            Go to collage
          </div>
          <div class="col-4">
            6/10/25
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
         
        </div>
      </div> 
    </center>
  )
}
export default App;