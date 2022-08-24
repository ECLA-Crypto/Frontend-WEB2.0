import CommerceNav from "../static/CommerceSection/CommerceNav"

const UserDashboard = () => {
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-60">
                    <div className="bg-gray-300 w-full h-full"></div>
                </div>
                <div className="md:w-1/2 w-full p-5 flex gap-5 justify-between">
                    <div className="w-fit bg-gray-300 flex justify-center items-center p-5 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Pending Cashout</h4>
                    </div>
                    <div className="w-fit bg-gray-300 flex justify-center items-center p-5 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Paid Investment</h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td class="py-4 px-6">
                                        $2999
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td class="py-4 px-6">
                                        $1999
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-5 h-fit">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td class="py-4 px-6">
                                        $2999
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td class="py-4 px-6">
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