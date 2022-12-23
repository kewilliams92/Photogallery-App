import React, {useState} from "react";
import { Fancybox } from ".";
import { selectPhotos, searchPhotosAsync } from "../features/photosSlice/photosSlice";
import { useSelector, useDispatch } from "react-redux";

const Photos = () => {
  const photos = useSelector(selectPhotos);
  const allPhotos = [...photos];
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    await dispatch(searchPhotosAsync(query))
    .then((res) => {
      setPics(res.payload.results)
    }
    )
  }

  const search = (e) => {
    setQuery(e.target.value);
  }

  return (
    <Fancybox options={{ infinite: false }}>
        <div className='search'>
            <form action=''>
                <input type='text' placeholder='Search' value={query} onChange={search} />
                <button type='submit' onClick={searchPhotos}>Search</button>
            </form>
        </div>
      <div className="container">
        {/*if pics is empty, display photos, else display pics*/}
        {pics.length === 0 ?
          allPhotos.map((photo) => (
            <div key={photo.id} className="grid">
              <a
                data-fancybox="gallery"
                href={photo.urls.regular}
                data-caption={photo.alt_description}
              >
                <img src={photo.urls
                  .thumb} alt={photo.alt_description} />
                <h4 className="name">By {photo.user.first_name} {photo.user.last_name}</h4>
                <h5 className="name">IG: {photo.user.instagram_username}</h5>
              </a>
            </div>
          )) : 
          pics.map((photo) => (
            <div key={photo.id} className="grid">
              <a
                data-fancybox="gallery"
                href={photo.urls.regular}
                data-caption={photo.alt_description}
              >
                <img src={photo.urls
                  .thumb} alt={photo.alt_description} />
                <h4 className="name">By {photo.user.first_name} {photo.user.last_name}</h4>
                <h5 className="name">IG: {photo.user.instagram_username}</h5>
              </a>
            </div>
          ))
        }
      </div>
    </Fancybox>
  );
};

export default Photos;
