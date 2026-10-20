import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Catalog from "./pages/catalog";
import Product from "./pages/product";
import Services from "./pages/services";
import About from "./pages/about";
import Parts from "./pages/parts";
import { Layout } from "./components/site";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/catalogo" component={Catalog} />
          <Route path="/catalogo/:slug" component={Product} />
          <Route path="/servicos" component={Services} />
          <Route path="/pecas" component={Parts} />
          <Route path="/sobre" component={About} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
