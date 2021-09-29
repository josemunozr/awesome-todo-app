import { Filters } from '../Filters';
import { Item } from '../Item';
import { List } from '../List';
import { Search } from '../Search';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Awesome TodoList</h1>
        <Search />
      </header>
      <main className="app-main">
        <List>
          <Item text="qwe"></Item>
          <Item text="qwe"></Item>
          <Item text="qwe"></Item>
          <Item text="qwe"></Item>
          <Item text="qwe"></Item>
          <Item last></Item>
        </List>
        <div className="filterOptions">
          <Filters />
        </div>
        <p className="info-reorder">Drag and drop to reorder list</p>
      </main>
    </div>
  );
}

export default App;
