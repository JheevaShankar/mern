import { useState } from "react";
const Like = () => {
    const [like,setLike] = useState(0);
    return (
        <div>
            <h1> Like : {like} </h1>
            <button onClick ={() => setLike(like + 1)}>👍</button>
            <button onClick ={() => setLike(like - 1)}>👎</button>
        </div>
    )
}
export default Like;