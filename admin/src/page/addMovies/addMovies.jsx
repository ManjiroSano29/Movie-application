import './addMovies.scss'
import { useState, useContext } from 'react'
import storage from "../../firebase"
import { createMovie } from '../../context/movieContext/callApi'
import { MovieContext } from '../../context/movieContext/MovieContext'

const AddMovies = () => {
    const [movie, setMovie] = useState({})
    const [image, setImage] = useState(null)
    const [image_title, set_image_title] = useState(null)
    const [image_sm, set_image_sm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)

    const { dispatch } = useContext(MovieContext)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setMovie({
            ...movie,
            [name]: value
        })
    }

    const upload = (items) => {
        items.forEach((item) => {
          const fileName = new Date().getTime() + item.label + item.file.name
          const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              console.log("Upload is " + progress + "% done")
            },
            (error) => {
              console.log(error)
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                setMovie((prev) => {
                  return { ...prev, [item.label]: url }
                })
                setUploaded((prev) => prev + 1)
              })
            }
          )
        })
      }

    const handleUpload = (e) => {
        e.preventDefault()
        upload([
          { file: image, label: "image" },
          { file: image_title, label: "image_title" },
          { file: image_sm, label: "image_sm" },
          { file: trailer, label: "trailer" },
          { file: video, label: "video" }
        ]);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        createMovie(movie, dispatch)
    }

    return (
        <div className='add_movies'>
            <h1 style={{marginLeft:"30px"}}>New Movies</h1>
            <form className='add_movies_forms'>
            <div className='add_movies_form'>
                <label className='label'>Image</label>
                <input 
                    type="file"
                    className='file'
                    name='image'
                    onChange={e => setImage(e.target.files[0])}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Title Image</label>
                <input 
                    type="file"
                    className='file'
                    name='image_title'
                    onChange={e => set_image_title(e.target.files[0])}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Thumbnail Image</label>
                <input 
                    type="file"
                    className='file'
                    name='image_sm'
                    onChange={e => set_image_sm(e.target.files[0])}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Trailer</label>
                <input 
                    type="file"
                    className='file'
                    name='trailer'
                    onChange={e => setTrailer(e.target.files[0])}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Video</label>
                <input 
                    type="file"
                    className='file'
                    name='video'
                    onChange={e => setVideo(e.target.files[0])}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Title</label>
                <input 
                    type="text"
                    placeholder='Title'
                    className='movies_text'
                    name='title'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Year</label>
                <input 
                    type="text"
                    placeholder='Year'
                    className='movies_text'
                    name='year'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Genre</label>
                <input 
                    type="text"
                    placeholder='Genre'
                    className='movies_text'
                    name='genre'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Duration</label>
                <input 
                    type="text"
                    placeholder='Duration'
                    className='movies_text'
                    name='duration'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Limit</label>
                <input 
                    type="text"
                    placeholder='Limit'
                    className='movies_text'
                    name='limit'
                    onChange={handleChange}
                />
            </div>
            
            <div className='add_movies_form'>
                <label className='label'>Description 1</label>
                <input 
                    type="text"
                    placeholder='Description 1'
                    className='movies_text'
                    name='desc1'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Description 2</label>
                <input 
                    type="text"
                    placeholder='Description 2'
                    className='movies_text'
                    name='desc2'
                    onChange={handleChange}
                />
            </div>
            <div className='add_movies_form'>
                <label className='label'>Description 3</label>
                <input 
                    type="text"
                    placeholder='Description 3'
                    className='movies_text'
                    name='desc3'
                    onChange={handleChange}
                />
            </div>
            
            <div className='add_movies_form'>
                <label className='label'>Is series?</label>
                <select name="isSeries" id='isSeries' className='movies_text' onChange={handleChange}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
            
            <div className='add_movies_form'>
                <label className='label'>Main description</label>
                <textarea
                    name='main_desc'
                    style={{width:"400px", height:"120px" ,position:"absolute", marginTop:"23px" }}
                    placeholder='Main description'
                    className='movies_text'
                    onChange={handleChange}
                />
            </div>

            {uploaded === 5 ? (
                <button className='add_movies_button' onClick={handleSubmit}>Create</button>
            ):(
                <button className='add_movies_button' onClick={handleUpload}>Upload</button>
            )}
            </form>
        </div>
    )
}

export default AddMovies