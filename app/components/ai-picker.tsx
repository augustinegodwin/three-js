"use client"
import CustomizeableButton from './customizeableButton'

export default function AiPicker() {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        
        // onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {false ? (
          <CustomizeableButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
            handleClick={()=>{}}
          />
        ) : (
          <>
            <CustomizeableButton 
              type="outline"
              title="AI Logo"
              handleClick={() => {}}
              customStyles="text-xs"
            />

            <CustomizeableButton 
              type="filled"
              title="AI Full"
              handleClick={() => {}}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}
