import React, { useState } from 'react';
import { CommentProps } from './constant';
import { Button, Input } from 'antd';


const Comment: React.FC<CommentProps> = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleSave = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-md p-4 mb-4">
      {isEditing ? (
        <Input type="text" className='mt-[10px]' value={editText} onChange={(e) => setEditText(e.target.value)} placeholder="Add comment..." />
      ) : (
        <p className="flex-grow text-gray-700">{comment.text}</p>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <Button onClick={handleSave} className='mt-[10px] text-green-500 hover:bg-green-500 hover:text-white'> Save</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} className='mt-[10px] text-blue-500 hover:bg-blue-500 hover:text-white'> Edit</Button>
        )}
        <Button onClick={() => onDelete(comment.id)} className='mt-[10px] text-red-500 hover:bg-red-500 hover:text-white'> Delete</Button>
      </div>
    </div>
  );
};

export default Comment;