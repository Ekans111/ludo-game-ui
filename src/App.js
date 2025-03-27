import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { BunnySprite } from "./BunnySprite";
import { WelcomePage } from "./scenes/WelcomePage";
import { MenuPage } from "./scenes/MenuPage";
import { SettingsPage } from "./scenes/SettingsPage";
import { useGameStore } from "./store/gameStore";
import { RegisterPage } from "./scenes/RegisterPage";
import { LoginPage } from "./scenes/LoginPage";
import { WithdrawPage } from "./scenes/WithdrawPage";
import OnlineOptionPage from "./scenes/OnlineOptionPage";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Graphics,
  Sprite,
});

function ProtectedRoute({ children }) {
  const isAuthenticated = useGameStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

export default function App() {
  return (
    // We'll wrap our components with an <Application> component to provide
    // the Pixi.js Application context
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/online-option"
          element={
            <ProtectedRoute>
              <OnlineOptionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/charge"
          element={
            <ProtectedRoute>
              <WithdrawPage />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <Application>
                <BunnySprite />
              </Application>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
