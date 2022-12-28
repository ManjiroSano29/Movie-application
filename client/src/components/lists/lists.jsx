import './lists.scss'
import MovieList from '../movie_list/movie_list'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState, useRef } from 'react'

const Lists = ({list}) => {
    const [slideNumberClick, setSlideNumberClick] = useState(0)
    const [isMoved, setIsMoved] = useState(false)

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 60
    
        if(direction === "left" && slideNumberClick > 0){
            setSlideNumberClick(slideNumberClick - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && slideNumberClick < 10){
            setSlideNumberClick(slideNumberClick + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    
    return (
        <div className='wrapper'>
            <div className='movie_title'>{list.title}</div>
            <div className='lists'>
                <ArrowBackIosIcon 
                    className='arrow left' 
                    onClick = {() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className='movie_list' ref={listRef}>
                    {list.film.map((item, i) => (
                        <MovieList index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosIcon
                    className='arrow right'
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}

export default Lists