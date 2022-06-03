/* todo */

import './style.css';
import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

//Project's Tasks component
function Task({ taskId, deleteB, descricao, addedBy, card }) {
  //Similar to useDrop() hook from react-dnd, implements item being dragged
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { taskId, descricao, addedBy, card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="task"
      ref={drag}
      style={isDragging ? { opacity: '4%' } : {}}
    >
      {deleteB}

      {descricao}

      <div className="addBy ">Added by: {addedBy}</div>
    </div>
  );
}
export default Task;

Task.propTypes = {
  taskId: PropTypes.number,
  deleteB: PropTypes.any,
  descricao: PropTypes.string,
  addedBy: PropTypes.string,
  card: PropTypes.string,
};
