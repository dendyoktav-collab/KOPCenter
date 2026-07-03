import type { ErrorInfo, ReactNode } from "react";

import { Component } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class AppErrorBoundary extends Component<Props, State> {

  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error);
    console.error(info);
  }

  render() {

    if (this.state.hasError) {
      return (
        <h2>
          Terjadi kesalahan pada aplikasi.
        </h2>
      );
    }

    return this.props.children;
  }
}