import { AppRouter } from "./common";
import { HeaderFeature, PageFeature, ResetStyles } from "./features";

function App() {
  return (
    <div>
      <ResetStyles />
      <PageFeature>
        <HeaderFeature />
        <AppRouter />
      </PageFeature>
    </div>
  );
}

export default App;
