import React, { useEffect, useState } from 'react';

function Comments({id}) {
  const [comments, setComments] = useState([])
  const [inputs, setInputs] = useState('')
  useEffect(() => {
    fetch(`http://localhost:8080/comments/${id}`).then(res => res.json()).then(data => setComments(data))
  }, [])
  const addHandler = async() => {
    const response = await fetch(`http://localhost:8080/comments/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({inputs})
    })
  }
  console.log(comments);
  return (
    <div className='commentForm'>
    <input onChange={(e) => setInputs(e.target.value)}></input>
    <button onClick={addHandler}>Добавить </button>
    </div>
  );
}

export default Comments;
