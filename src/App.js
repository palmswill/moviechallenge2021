
import './App.css';
import Title from './component/Title';
import SearchSection from './component/SearchSection';
import MovieContextProvider from './context/MovieContextProvider';

function App() {
  return (
    <MovieContextProvider>
    <div className="App">
      <header className="App-header">
        <Title/>
      </header>
        <SearchSection/>
    </div>
    </MovieContextProvider>
  );
}

export default App;
