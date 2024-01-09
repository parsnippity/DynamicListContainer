import DynamicListContainer from "./DynamicListContainer";

function App() {
  let testData = ["Reading", "Crocheting", "Watching TV", "Playing video games", "Coding", "Writing", "Sewing", "Cooking", "Baking", "Playing cards"];
  return (
    <DynamicListContainer data={testData} type="ol" orientation="horizontal"/>
  )
}

export default App;