import './App.css';
import People from "./People";
import CreatePerson from "./CreatePerson";
import FindPersonInterest from "./FindPersonInterest";
import FindPersonRole from "./FindPersonRole";
function App() {
  return (
      <div className="px-4 pt-5 my-5 text-center border-bottom">
          <div className="col-lg-6 mx-auto">
              <div className="px-0 pt-0 my-0 text-center">
                    <CreatePerson></CreatePerson>
              </div>
              <div className="px-4 pt-5 my-5 text-center">
                  <FindPersonRole></FindPersonRole>
              </div>
              <div className="px-4 pt-5 my-5 text-center">
                    <FindPersonInterest></FindPersonInterest>
              </div>
              <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <People></People>
              </div>

          </div>
      </div>
  );
}

export default App;
