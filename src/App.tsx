import { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Link,
  HashRouter as Router
} from "react-router-dom";
import { actions } from "./interactive-app";


function Main() {
  function changeToken() {
    actions.updateGlobalState((state) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiIyOWY2NWUwMC0xZWU1LTQwZjAtYWZhNS0zM2MyODE5ODI4ODMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM3NDcyODkyfQ.HQoeTm1khKSurFhgyWnnrRSvoMS0IJ-IVsBln5nCD4A'
      return {
        ...state,
        token,
      }
    })
  }

  return (
    <>
      <Router >
        <div className="h-full text-white">
          <div className="fixed w-[220px] bg-violet h-[100vh]">
            Sidebar
          </div>

          <div className="pl-[240px] pr-[20px]">
            <div className="h-[45px] bg-blue fixed w-[calc(100%-220px)] ml-[-20px]">
              <div className='flex gap-2 items-center justify-center'>
                <div className="p-2 bg-neutral rounded">
                  <Link to="/">Home</Link>
                </div>
                <div className="p-2 bg-neutral rounded">
                  <Link to="/about">About</Link>
                </div>
                <div className="p-2 bg-neutral rounded">
                  <Link to="/topics">Topics</Link>
                </div>
                <div className="p-2 bg-neutral rounded">
                  <Link to="/sigma/ssai">SSAI</Link>
                </div>
                {/* <button onClick={changeToken}> Change Token </button> */}
              </div>
            </div>
            <div className="pt-[60px] min-h-[calc(100vh-101px)] bg-gray py-[15px] border-box">
              <div className="relative my-[-15px] min-h-[calc(100vh-45px)] mx-[-20px]">
                <div className="absolute inset-0" id="sigma-app"></div>
                <Switch>
                  <Route path="/editor/interactive-app">
                  </Route>
                  <Route path="/about">
                    <div>About</div>
                  </Route>
                  <Route path="/topics">
                    <div>Topics</div>
                  </Route>
                  <Route path="/">
                    <div className="">
                      Home
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>

          </div>
        </div>
      </Router>
    </>
  )
}


export default Main
