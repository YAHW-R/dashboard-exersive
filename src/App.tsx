import './App.css'
import Nav from './Components/nav'
import Card from './Components/FinanceCard'
import Table from './Components/Table'
import MetricContainer from './Components/MetricContainer'
import Metric from './Components/Metric'

import Loaded from './Components/LoadComponent'

import { useState, useEffect } from 'react'
import { fetchingDataForTable } from './utils/fetchs'
import { getTotalMenusualExpense } from './utils/utils'
import { type expense } from './utils/types'

function App() {
  const [expenses, setExpenses] = useState<expense[] | null>()
  const [totalExpense, setTotalExpense] = useState<number>(0)
  const [totalIncome, setTotalIncome] = useState<number>(0)


  useEffect(() => {
    const fetchData = async () => {
      const fetch = await fetchingDataForTable()
      setExpenses(fetch)
      setTotalExpense(getTotalMenusualExpense(fetch))
      setTotalIncome(7500)
    }

    fetchData()
  }, [])

  return (
    <>
      <Nav />
      <div className='card-container'>
        <Card cardTitle='Monthly income' cardAmount={totalIncome} />
        <Card cardTitle='Current total money' cardAmount={parseFloat((totalIncome - totalExpense).toFixed(2))} />
        <Card cardTitle='Total Expenses' cardAmount={totalExpense} />
      </div>
      {expenses ? <Table expenses={expenses ? expenses : []}></Table> : <Loaded />}
      <MetricContainer metricTitle='Monthly Income and Expenses'>
        <Metric />
      </MetricContainer>
    </>
  )
}

export default App
