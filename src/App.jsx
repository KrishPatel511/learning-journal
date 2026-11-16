import UseMemoExamples from "./components/useMemoExamples";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>React.memo Example</h1>
      {/* <p>Parent count: {count}</p> */}
      {/* <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increase parent count
      </button>
      <ReactMemoHook message="This child receives the same message each time." /> */}
      {/* <UseMemoExample /> */}

      {/* <UseMemoDemo/> */}

      <UseMemoExamples/>
    </>
  );
};

export default App;
