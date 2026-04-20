import { Component, type ErrorInfo, type ReactNode } from "react";

interface RouteErrorBoundaryProps {
  children: ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
}

export class RouteErrorBoundary extends Component<RouteErrorBoundaryProps, RouteErrorBoundaryState> {
  state: RouteErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): RouteErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro ao carregar rota:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="min-h-[50vh] w-full bg-white">
        <div className="lp-container py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Não foi possível carregar esta página</h2>
          <p className="text-zinc-600 mb-8">
            Ocorreu uma falha temporária no carregamento. Atualize para tentar novamente.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
          >
            Recarregar página
          </button>
        </div>
      </div>
    );
  }
}
