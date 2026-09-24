"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundry extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Customer section error:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-muted">
            We couldn&apos;t load the customer activity.
          </p>

          <button
            type="button"
            onClick={this.resetError}
            className="mt-4 rounded-md bg-accent-strong px-4 py-2 text-sm text-white"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
