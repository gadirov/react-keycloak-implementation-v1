import RolePermission from "./keycloak/RolePermission";
import { keycloak } from "./keycloak/Keycloak";
import { get } from "./services/HttpService";

function App() {
  const getRequest = async () => {
    get("https://jsonplaceholder.typicode.com/posts");
  };
  getRequest();

  return (
    <div className="App" style={{ display: "flex" }}>
      <div
        style={{
          flexBasis: "250px",
          height: "100vh",
          background: "#1041a3",
          paddingTop: "50px",
          color: "#fff",
        }}
      >
        <h2>Admission Plan</h2>
        <RolePermission roles={["view-applications"]}>
          <h2>TTQ</h2>
        </RolePermission>
        <h2
          style={{
            position: "absolute",
            bottom: 0,
            left: "70px",
            cursor: "pointer",
          }}
          onClick={keycloak.logout}
        >
          Logout
        </h2>
      </div>
      <h1 style={{ flexGrow: 1 }}>Welcome {keycloak?.tokenParsed?.name}</h1>
    </div>
  );
}

export default App;
