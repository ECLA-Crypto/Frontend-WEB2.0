import { Link } from "react-router-dom"
const Table = () => {
  return (
    <>
        <div className="mt-5 border-t border-gray-600 w-full text-white flex">
            <Link to='/' className="bg-transparent font-medium w-1/2 py-2 px-3 text-center">Open Orders</Link>
            <Link to='/' className="bg-gray-700 font-medium w-1/2 py-2 px-3 text-center">Order History</Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-transpatent border-b border-gray-500">
                    <tr>
                        <th className="px-6 py-3">From</th>
                        <th className="px-6 py-3">To</th>
                        <th className="px-6 py-3">Limit Price</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table