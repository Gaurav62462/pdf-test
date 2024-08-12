import React, { useCallback, useState } from 'react';
import { CommentType } from './constant';
import Comment from './Comments';
import { Button, Input } from 'antd';

const CommentList: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [newComment, setNewComment] = useState('');

    console.log(comments, 'comments')

    /**
     * This function  checks if the input is not empty spaces, then creates a new comment object and
     * clears the input field.
     */
    const handleAddComment = useCallback(() => {
        if (newComment.trim()) {
            const newCommentObj: CommentType = {
                id: Date.now(),
                text: newComment,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    }, [comments, newComment])

    /**
     * this function delete the commnet from the comments array.
     */
    const handleDeleteComment = (id: number) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };


    /**
     * This function  edit the selected comment in the list.
     */
    const handleEditComment = (id: number, newText: string) => {
        setComments(
            comments.map((comment) =>
                comment.id === id ? { ...comment, text: newText } : comment
            )
        );
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-6">
                <Input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="comment..." />
                <Button onClick={handleAddComment} type="primary" className='mt-[10px]'> Add Comment</Button>
            </div>
            <div>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onDelete={()=>handleDeleteComment(comment.id)}
                        onEdit={handleEditComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentList;
