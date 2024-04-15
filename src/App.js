import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Work from './components/Work/Work';
import TechList from './components/TechList/TechList';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicInfo />
        <Work />
        <TechList />
        <Resources />
        <DeveloperSetup />
      </header>
    </div>
  );
}

export default App;
