import React from 'react';
import DragBox from './DragBox';
import {SortableContainer} from 'react-sortable-hoc';

function DragboxList({colors, removeColor}) {
    return (
        <div style={{height: '100%'}}>
            {colors.map((color, i) => (
                <DragBox 
                    index={i}
                    key={color.name}
                    color={color.color} 
                    name={color.name} 
                    handleClick={() => removeColor(color.name)}
                />
            ))}
        </div>
    )
}

export default SortableContainer(DragboxList);