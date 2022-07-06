const Transfers = () => {
  return (
    <div className="relative overflow-x-auto w-full ">
        <table className="w-full text-sm text-left text-gray-100">
            <thead className="text-xs text-gray-200 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Token
                    </th>
                    <th scope="col" className="px-6 py-3">
                        From
                    </th>
                    <th scope="col" className="px-6 py-3">
                        To
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Value
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hash
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Sliver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        White
                    </td>
                    <td className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                    <td className="px-6 py-4">
                        $99
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-center items-center text-gray-100 my-2 font-semibold text-sm">
            <span className="flex items-center gap-3">
                <button className="px-2 py-2 rounded-lg bg-gray-100"><img src="/assets/icons/leftArr.png" className="w-3 h-3" alt="Left Arrow"/></button>
                <p>1</p>
                <button className="px-2 py-2 rounded-lg bg-gray-100"><img src="/assets/icons/rightArr.png" className="w-3 h-3" alt="Left Arrow"/></button>
            </span>
        </div>
    </div>
  )
}

export default Transfers