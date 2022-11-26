import React from 'react'

export default function Form({handleSubmit, value, setValue}) {
    
    console.log("Form is Rendering");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex mr-2">
                <input 
                    className="w-full px-3 mr-4 text-gray-500 border rounded"
                    type="text" 
                    name="value"
                    placeholder="해야 할 일을 입력하세요."
                    value={value}
                    onChange={handleChange}
                />
                <input
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                    type="submit"
                    value="입력"
                />
            </form>
        </div>
    )
}
