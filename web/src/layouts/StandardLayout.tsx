type StandardLayoutProps = {
  children?: React.ReactNode
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-pure-white">
        <h1 className="text-large-title font-bold">Redwood Todo</h1>
      </header>
      <div>
        <main className="flex-auto p-4 bg-white shadow-inner">{children}</main>
      </div>
    </div>
  )
}

export default StandardLayout
