import Tasks from './pages/Tasks'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            HM Civil Service
          </h1>
          <p className="text-lg text-gray-600 mt-2 font-light">Task Management</p>
        </header>
        <Tasks />
      </div>
    </div>
  )
}

export default App
