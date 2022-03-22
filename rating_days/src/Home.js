import React from 'react'
import { useHistory } from 'react-router'
// 메인페이지 입니다요 //

const Home = (props) => {
  const history = useHistory()
  // 일주일 딕셔너리로 선언
  const weekList = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  }

  // 잘 나오는지 배열로 바꾼 후 맵함수 돌려서 찍어보기
  console.log(Object.keys(weekList).map((k, idx) => weekList[k]))

  //weekList 배열로 바꿔준 후 오늘 요일부터 보여주기
  const weekDays = Object.keys(weekList).map((k, idx) => {
    let today = new Date().getDay()
    console.log(today) // 그냥 궁금
    let d =
      today + parseInt(k) > 6 ? today + parseInt(k) - 7 : today + parseInt(k)

    return weekList[d]
  })
  console.log(weekDays) //오늘 부터 나오는지 확인해보기

  //평점 만들기
  const weekRate = weekDays.map((w, idx) => {
    return {
      day: w,
      rate: Math.floor(Math.random() * 6), // 0 <= rate <= 5
    }
  })
  console.log(weekRate)

  //메인 화면에 보일 것들
  return (
    <div className="contanier">
      <h2>나의 일주일 평점은?</h2>
      {weekRate.map((w, idx) => {
        return (
          <div>
            <p>{w.day}</p>
            {Array.from({ length: 5 }, (item, idx) => {
              return <div>ㅇㅅㅇ</div>
            })}

            <div
              onClick={() => {
                history.push(`/detail/${w.day}`)
              }}
            >
              전송
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
