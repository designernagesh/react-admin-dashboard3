import InfoBoxes from './components/InfoBoxes';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import PageTitle from './components/PageTitle';
import Sidebar from './components/Sidebar';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Sidebar />

      <section id="content">
        <Navbar />
        <main>
          <PageTitle />
          <InfoBoxes />
          <div className="table-data">
            <Orders />
            <Todos />
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
