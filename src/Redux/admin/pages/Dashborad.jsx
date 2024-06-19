import React from 'react'
import { Button } from '../../atoms/Atoms'
import Table from '../../component/Table'

const Dashborad = () => {
  return (
    <div>

      <div className="plus d-flex justify-content-end align-items-center">
        <Button content={<i className="fa-solid fa-plus"></i>} style="button"/>
      </div>

      <Table />
    </div>
  )
}

export default Dashborad
