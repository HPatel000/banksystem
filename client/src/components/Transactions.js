import React, { useContext, useEffect } from 'react'
import globalContext from '../context/globalContext'

const Transactions = () => {
  const { transactions, getTransactions, loading } = useContext(globalContext)
  useEffect(() => {
    getTransactions()
  }, [])
  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date(date).toLocaleString('en-US', options)
  }
  return (
    <div className='transactionContainer'>
      {loading && <h2 className='loading'>loading ...</h2>}
      {!loading && (
        <table>
          <thead>
            <tr className='transaction'>
              <th className='TFrom'>FROM</th>
              <th className='TTO'>TO</th>
              <th className='TAmount'>AMOUNT</th>
              <th className='TDate'>DATE</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map(item => (
              <tr key={item._id} className='transaction'>
                <td className='TFrom'>{item.from.name}</td>
                <td className='TTO'>{item.to.name}</td>
                <td className='TAmount'>{item.amount}</td>
                <td className='TDate'>{formatDate(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Transactions
