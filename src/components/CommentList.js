import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ListGroup } from 'react-bootstrap';
import SingleCommnet from './SingleCommnet';
import { useState } from 'react';
import AddComment from '../components/AddComment'

const CommentList = ({ comments, closeFunction, refreshFunction }) => {
    const [isAddCommentOpen, setIsAddCommentOpen] = useState(false)
    const toggleAddComment = () => {
        setIsAddCommentOpen(!isAddCommentOpen)
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered scrollable>
                <Modal.Header>
                    <Modal.Title>Commenti</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {comments && comments.map((comment, index) => {
                            return (
                                <SingleCommnet key={index} comment={comment}/>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeFunction}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={toggleAddComment}>
                        Add Comment
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
            {isAddCommentOpen && <AddComment closeFunction={toggleAddComment}
                bookId={comments[0].elementId} refreshFunction={refreshFunction}/>}
        </div>
    )
}

export default CommentList