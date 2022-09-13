import CommerceNav from "../static/CommerceSection/CommerceNav"
import InvestmentChart from "../static/CommerceSection/InvestmentChart"

const UserDashboard = () => {
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <InvestmentChart/>
                    {/* <div className="bg-gray-300 w-full h-full"></div> */}
                </div>
                <div className="md:w-1/2 w-full p-5 flex gap-5 justify-between md:flex-row flex-col">
                    <div className="md:w-fit h-fit w-full bg-gray-300 flex justify-center items-center px-5 py-10 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Pending Cashout</h4>
                    </div>
                    <div className="md:w-fit h-fit w-full bg-gray-300 flex justify-center items-center px-5 py-10 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Paid Investment</h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td className="py-4 px-6">
                                        $2999
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td className="py-4 px-6">
                                        $1999
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-5 h-fit">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td className="py-4 px-6">
                                        $2999
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td className="py-4 px-6">
                                        $1999
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard