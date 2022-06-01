import './index.css';
import React, {useEffect, useState} from 'react';
import {Button, FloatingLabel, Form} from 'react-bootstrap';


function Comments({id}) {
    const [comments, setComments] = useState([])
    const [inputs, setInputs] = useState('')
    useEffect(() => {
        fetch(`http://localhost:8080/comments/${id}`).then(res => res.json()).then(data => setComments(data.comments))
    }, [comments])
    const addHandler = async () => {
        const response = await fetch(`http://localhost:8080/comments/${id}`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: inputs})
        })
    }

    return (
        <>
            <div className='commentForm'>

                <FloatingLabel controlId="floatingTextarea2" label="Комментарий">
                    <Form.Control
                        onChange={(e) => setInputs(e.target.value)}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{height: '100px'}}
                    />
                </FloatingLabel>
                {/* <button onClick={addHandler}>Добавить</button> */}
                <Button onClick={addHandler} variant="info">Добавить</Button>{' '}

            </div>

            <div className="container">
                <div className="row">
                    {comments.map(comment => {
                            return (
                                <div className="col-md-8">
                                    <div className="media g-mb-30 media-comment">
                                        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                            <div className="g-mb-15">
                                                <h5 className="nameUser h5 g-color-gray-dark-v1 mb-0">{comment.User.name}</h5>
                                                <span
                                                    className="g-color-gray-dark-v4 g-font-size-12">{comment.createdAt}</span>
                                            </div>

                                            <p>{comment.body}</p>

                                            <ul className="list-inline d-sm-flex my-0">
                                                <li className="list-inline-item g-mr-20">
                                                </li>
                                                <li className="list-inline-item g-mr-20">
                                                </li>
                                                <li className="list-inline-item ml-auto">
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}


                    {/* <div className="col-md-8">
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15">
            <h5 className="nameUser h5 g-color-gray-dark-v1 mb-0">Игорь Карасев</h5>
            <span className="g-color-gray-dark-v4 g-font-size-12">7 дней назад</span>
          </div>

          <p>Хорошие домашние колбаски, вкусные бургеры с нежной котлеткой. К любому супу советую не хлеб брать, а теплые булочки. Безалкогольные напитки попробовать не довелось, слишком много вкусного пива и коктейлей. Крепкий алко не пил тут, ничего не скажу.</p>

          <ul className="list-inline d-sm-flex my-0">
            <li className="list-inline-item g-mr-20">
            </li>
            <li className="list-inline-item g-mr-20">
            </li>
            <li className="list-inline-item ml-auto">
            </li>
          </ul>
        </div>
      </div>
    </div> */}

                </div>
            </div>


        </>
    );
}


export default Comments;
