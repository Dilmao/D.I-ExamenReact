import { useEffect, useState } from 'react';
import PetStore from './PetStore';
//Failed to fetch

const DEFAULT_URL = "http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1";

// Peta
async function fetchPosts() {
    const response = await fetch(DEFAULT_URL);
    const blogPosts = await response.json();
    return blogPosts;
}

function App() {
    const [loadedPost, setLoadedPosts] = useState([])

    useEffect(function () {
        fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
    }, []);

    return (
        <div>
            <PetStore Masctas={loadedPost}/>
        </div>
    );
}

export default App;
