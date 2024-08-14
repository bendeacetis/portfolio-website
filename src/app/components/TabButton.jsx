import React from 'react'




const TabButton = ({active, selectTab, children})=>{




    const buttonClasses = active

        ? 'text-[#282628] border-b border-[#282628]-500'

        :'text-[#ABD7BE]';




    return(

        <button onClick={selectTab}>

            <p className={'mr-3 font-semibold ${buttonClasses}'}>

                {children}

            </p>

        </button>

    )

}

export default TabButton;