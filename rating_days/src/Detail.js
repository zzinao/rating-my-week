import React from 'react'
import { useHistory, useParams } from 'react-router'

const Detail = (props) => {
  const history = useHistory()
  const params = useParams()
  const [rate, setRate] = React.useState(0)

  const id = props.match.params.id
  console.log(id, typeof id)

  return <div>{id && <h2> 오늘은 {id}요일 입니다</h2>}</div>
}

export default Detail
