import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

const Detail = (props) => {
  const history = useHistory()
  const params = useParams()
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const id = props.match.params.id
  console.log(id, typeof id)

  return (
    <Container>
      {id && (
        <Title>
          <span style={{ color: '#FA928C' }}>{id}요일</span> 어떠셨나요?
        </Title>
      )}
      <Box2>
        {[...Array(5)].map((heart, i) => {
          const ratingValue = i + 1

          return (
            <Label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaHeart
                className="heart"
                color={ratingValue <= (hover || rating) ? '#FA928C' : '#e4e5e9'}
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </Label>
          )
        })}

        <Button
          onClick={() => {
            history.goBack()
          }}
        >
          평점 남기기
        </Button>
      </Box2>
      <Text>
        오늘의 점수는 <span style={{ color: '#F59476' }}>{rating}</span>점
        입니다{' '}
      </Text>
    </Container>

    // <div>
    //   {id && <h2> 오늘은 {id}요일 입니다</h2>}
    //   <div>
    //     {Array.from({ length: 5 }, (item, idx) => {
    //       return (
    //         <div
    //           key={idx}
    //           onClick={() => {
    //             setRate(idx + 1)
    //           }}
    //         >
    //           gg
    //         </div>
    //       )
    //     })}
    //   </div>
    //   <button
    //     onClick={() => {
    //       history.push('/')
    //     }}
    //   >
    //     평점 남기기
    //   </button>
    // </div>
  )
}
const Container = styled.div`
  width: 40vw;
  border: 1px solid #eee;
  border-radius: 30px;
  margin: 100px auto;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 40px;
`
const Label = styled.label`
  margin: 0 auto;
`
const Text = styled.h2`
  text-align: center;
  margin: 30px;
  font-size: 20px;
`
const Box2 = styled.div`
  text-align: center;
`
const Button = styled.button`
  display: block;
  width: 10vw;
  padding: 10px;
  background-color: #c4c0fd;
  border: none;
  border-radius: 30px;
  margin: 30px auto;
  align-items: center;
  color: #fff;
  font-size: 16px;
`

export default Detail
