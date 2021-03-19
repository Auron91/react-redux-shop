import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import { Container, Grid } from "semantic-ui-react";

function App() {
  return (
    <div className="">
      <Header />
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductGrid />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
