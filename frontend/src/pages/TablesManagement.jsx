
const TablesManagement = () => {

  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">
      <main className="flex-1 flex flex-col min-h-0 py-5 md:py-6 px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-black mb-1 xs:mb-2">Tables</h1>
              <p className="text-lg font-normal text-gray-600">Manage and track all tables</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default TablesManagement
