import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';


const Lists = React.memo(({todoData, setTodoData, handleClick}) => {
	console.log("Lists is Rendering");

	const handleEnd = (result) => {
		console.log('result', result);

		if(!result.destination) return;

		const newTodoData = [...todoData];

		// reorderedItem => 변경하려는 아이템, 인덱스를 받아 일단 list에서 주워줌
		const [reorderedItem] = newTodoData.splice(result.source.index, 1);

		// list에서 삭제한 reorderedItem을 새로운 index에 전달
		newTodoData.splice(result.destination.index, 0, reorderedItem);
		setTodoData(newTodoData);

	}

	return (
		<div>
        	<DragDropContext onDragEnd={handleEnd}>
	            <Droppable droppableId='to-dos'>
	            {(provided) => (
	                <div {...provided.droppableProps} ref={provided.innerRef}>
	                    {todoData.map((data, index) => (
	                        <Draggable
	                            key={data.id}
	                            draggableId={data.id.toString()}
	                            index={index}
	                        >
														{(provided, snapshot) => (
															<List
																key = {data.id}
																id = {data.id}
																title = {data.title}
																completed = {data.completed}
																todoData = {todoData}
																setTodoData = {setTodoData}
																provided = {provided}
																snapshot = {snapshot}
																handleClick = {handleClick}
															/>
														)}
	                        </Draggable>
	                    ))}
	                    {provided.placeholder}
	                </div>
	            )}
	            </Droppable>
	        </DragDropContext>
        </div>
	)
});

export default Lists;

