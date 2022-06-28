import {
  HeaderFeature,
  HomeFeature,
  PageFeature,
  ResetStyles,
} from "./features";

function App() {
  return (
    <div>
      <ResetStyles />
      <PageFeature>
        <HeaderFeature />
        <HomeFeature />
      </PageFeature>
    </div>
  );
}

export default App;
