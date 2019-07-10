import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import User from "./components/User";
import Content from "./components/Content";
import AddProfile from "./components/AddProfile";
import { loadProfiles } from "./utils";
import { profiles as testProfiles } from "./data.json";

export const ViewContext = createContext();

function App() {
  const [view, setView] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  const onLoadProfiles = () => {
    setIsLoading(true);
    loadProfiles().then(profiles => {
      setProfiles(profiles);
      setIsLoading(false);
    });
  };

  return (
    <ViewContext.Provider value={view}>
      <Header />
      <Content>
        {!isLoading && (!profiles || profiles.length < 0) && <AddProfile />}
        {isLoading ? (
          "Laden"
        ) : view === "overview" ? (
          (profiles || testProfiles).map(({ name, statement, _id }) => (
            <Profile
              key={_id}
              name={name}
              statement={statement}
              id={name}
              onView={() => setView(name)}
            />
          ))
        ) : (
          <User
            goToOverview={() => setView("overview")}
            profile={(profiles || testProfiles).find(
              ({ name }) => name === view
            )}
          />
        )}
        <button onClick={onLoadProfiles}>Profile laden</button>
      </Content>
    </ViewContext.Provider>
  );
}

export default App;
