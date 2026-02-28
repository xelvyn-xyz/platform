import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { AuthProvider } from "@lib/auth";
import { queryClient } from "@lib/queryClient";
import { LayoutWrapper } from "@/components/layout-wrapper";

// Pages
import Landing from "@pages/landing";
import Agents from "@pages/agents";
import X402 from "@pages/x402";
import Logs from "@pages/logs";
import Skills from "@pages/skills";
import About from "@pages/about";
import Docs from "@pages/docs";
import Login from "@pages/login";
import NotFound from "@pages/not-found";

// Dashboard pages
import DashboardOverview from "@pages/dashboard/overview";
import DashboardAgents from "@pages/dashboard/agents";
import DashboardLogs from "@pages/dashboard/logs";
import DashboardXMTP from "@pages/dashboard/xmtp";
import DashboardSettings from "@pages/dashboard/settings";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <LayoutWrapper>
            <Switch>
              {/* Public routes */}
              <Route path="/" component={Landing} />
              <Route path="/agents" component={Agents} />
              <Route path="/x402" component={X402} />
              <Route path="/logs" component={Logs} />
              <Route path="/skills" component={Skills} />
              <Route path="/about" component={About} />
              <Route path="/docs" component={Docs} />
              <Route path="/login" component={Login} />

              {/* Dashboard routes */}
              <Route path="/dashboard" component={DashboardOverview} />
              <Route path="/dashboard/agents" component={DashboardAgents} />
              <Route path="/dashboard/logs" component={DashboardLogs} />
              <Route path="/dashboard/xmtp" component={DashboardXMTP} />
              <Route path="/dashboard/settings" component={DashboardSettings} />

              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </LayoutWrapper>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
