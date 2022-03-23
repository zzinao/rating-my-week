import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'
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
    <Container>
      <Title>나의 일주일 점수는?</Title>
      <hr />
      {weekRate.map((w, idx) => {
        return (
          <Box key={`weekDays_${idx}`}>
            <h3 style={idx === 0 ? { color: '#c4c0fd' } : { color: '#3D3339' }}>
              {w.day}
            </h3>
            {Array.from({ length: 5 }, (item, idx) => {
              return (
                <FaHeart
                  className="heart"
                  size={60}
                  color={w.rate <= idx ? '#e4e5e9' : '#FAA49B'}
                />
              )
            })}

            <Button
              onClick={() => {
                history.push(`/detail/${w.day}`)
              }}
            ></Button>
          </Box>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  width: 600px;
  border: 1px solid #eee;
  border-radius: 30px;
  padding: 10px;
  margin: 50px auto;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`
const Title = styled.h1`
  text-align: center;
  margin: 40px 0 30px;
  font-size: 40px;
  color: #3d3339;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  font-size: 25px;
`
const Button = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  background-color: #c4c0fd;
  cursor: pointer;
  &:hover {
    background-color: #f5ee69;
  }
`
export default Home
