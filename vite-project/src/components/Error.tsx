import { Component } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  fallback?: JSX.Element;
  children?: JSX.Element;
};

export default class ErrorBoundary extends Component<Props, State> {
  fallback;

  children;

  constructor(props: Props) {
    super(props);
    this.fallback = props.fallback;
    this.children = props.children;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return hasError ? this.fallback : this.children;
  }
}
