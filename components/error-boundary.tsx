"use client"

import React from "react"
import { Shield, AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
    this.setState({ errorInfo })
  }

  resetErrorBoundary = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-8 max-w-md w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-900/30 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">Something went wrong</h2>
            <p className="text-gray-400 text-center mb-6">An error occurred while rendering this component.</p>

            {this.state.error && (
              <div className="bg-gray-800/50 rounded p-3 mb-6 overflow-auto max-h-32">
                <p className="text-red-400 text-sm font-mono">{this.state.error.toString()}</p>
              </div>
            )}

            <div className="flex justify-center">
              <Button onClick={this.resetErrorBoundary} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-center">
              <Shield className="h-5 w-5 text-emerald-500 mr-2" />
              <span className="text-sm text-gray-400">
                0xmfbk<span className="text-emerald-500">.sec</span>
              </span>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
