import Test from "./concepts/Test";
import AuthProfile, { Profile } from "./concepts/HOC/Profile";
function App() {
  return (
    <div className="border-2 border-green-500 w-[70vw] min-h-[70vh] max-h-full overflow-auto mx-auto rounded-lg flex flex-col">
      <Test />
      <AuthProfile theme={"dark"} />
      <Profile user={{ name: "vani", role: "Admin" }} theme={"light"} />
    </div>
  );
}

export default App;
