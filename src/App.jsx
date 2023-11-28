import { Content } from "./layout/Content";
import { Router } from "./Router/Router";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (
    <div className="bg-black">
      <Content>
        <ScrollToTop />
        <Router/>
      </Content>
    </div>
  )
}

export default App
