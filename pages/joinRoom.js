import Sidebar from "../app/components/ui/Sidebar/Sidebar";
import CardPage from "../app/components/ui/Card/CardPage";
import SearchAndFilter from "../app/components/ui/SearchBar/SearchBar";
import { useRouter } from "next/router";

const domain = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
        width: "100%",
      }}
    >
      <div style={{ flex: "0 0 auto" }}>
        {" "}
        {/* Sidebar container */}
        <Sidebar />
      </div>
      <div style={{ flex: "1", padding: "20px" }}>
        {" "}
        {/* Main content container */}
        <SearchAndFilter />
        <CardPage />
      </div>
    </div>
  );
};

export default domain;
