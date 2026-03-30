import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import DocsLayout from "@/components/DocsLayout";
import Home from "@/pages/Index";
import Why from "@/pages/docs/Why";
import HowToRead from "@/pages/docs/HowToRead";
import Principles from "@/pages/docs/Principles";
import DataFirst from "@/pages/docs/DataFirst";
import ProgressiveDisclosure from "@/pages/docs/ProgressiveDisclosure";
import Modularity from "@/pages/docs/Modularity";
import InterfaceMeaning from "@/pages/docs/InterfaceMeaning";
import PageTypesOverview from "@/pages/docs/PageTypesOverview";
import ListPage from "@/pages/docs/ListPage";
import ObjectPage from "@/pages/docs/ObjectPage";
import ListPageAnatomy from "@/pages/docs/ListPageAnatomy";
import ObjectScreenAnatomy from "@/pages/docs/ObjectScreenAnatomy";
import MetaContent from "@/pages/docs/MetaContent";
import Layers from "@/pages/docs/Layers";
import Scenarios from "@/pages/docs/Scenarios";
import Future from "@/pages/docs/Future";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/why" element={<Why />} />
            <Route path="/how-to-read" element={<HowToRead />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/design/data-first" element={<DataFirst />} />
            <Route path="/design/progressive-disclosure" element={<ProgressiveDisclosure />} />
            <Route path="/design/modularity" element={<Modularity />} />
            <Route path="/design/interface-meaning" element={<InterfaceMeaning />} />
            <Route path="/pages/overview" element={<PageTypesOverview />} />
            <Route path="/pages/list" element={<ListPage />} />
            <Route path="/pages/object" element={<ObjectPage />} />
            <Route path="/anatomy/list-page" element={<ListPageAnatomy />} />
            <Route path="/anatomy/object-screen" element={<ObjectScreenAnatomy />} />
            <Route path="/anatomy/meta-content" element={<MetaContent />} />
            <Route path="/layers" element={<Layers />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/future" element={<Future />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
