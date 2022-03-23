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
          <span style={{ color: '#c4c0fd' }}>{id}요일</span> 어떠셨나요?
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
                color={ratingValue <= (hover || rating) ? '#FAA49B' : '#e4e5e9'}
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
          남기기
        </Button>
      </Box2>
      <div>
        <Score>
          오늘의 점수는 <span style={{ color: '#FA928C' }}>{rating}</span>점!
        </Score>
        {rating === 1 ? (
          <Text>아니 무슨 일이...😱</Text>
        ) : rating === 2 ? (
          <Text>많이 힘든 하루를 보내셨군요🥺</Text>
        ) : rating === 3 ? (
          <Text>오늘은 그럭저럭이에요🤔</Text>
        ) : rating === 4 ? (
          <Text>꽤 괜찮은 하루를 보냈나 본데~😀</Text>
        ) : (
          <Text>최고의 하루를 보내셨네요!😆</Text>
        )}
      </div>
    </Container>
  )
}
const Container = styled.div`
  width: 650px;
  border: 1px solid #eee;
  border-radius: 30px;
  margin: 100px auto;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin: 60px 0 20px;
  color: #3d3339;
`
const Label = styled.label`
  margin: 0 auto;
`

const Score = styled.h2`
  text-align: center;
  margin: 5px;
  font-size: 20px;
  color: #4d4d4d;
`
const Text = styled.h2`
  text-align: center;
  margin: 20px 0 35px;
  font-size: 25px;
  color: #4d4d4d;
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
  margin: 50px auto;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #f5ee69;
    color: #c4c0fd;
  }
`

export default Detail
