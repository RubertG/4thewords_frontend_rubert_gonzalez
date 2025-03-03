import { Toaster } from "sonner";
import { AppRoutes } from "./routes/routes";

export default function App() {
  return (
    <main className="px-4 my-6 max-w-6xl mx-auto lg:px-10 lg:my-10">
      <AppRoutes />
      <Toaster />
    </main>
  )
}