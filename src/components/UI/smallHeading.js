import React from 'react'

export default function SmallHeading(props) {
    return (
        <div>
            <p className="uppercase font-14 bold-600 primaryColor ls-1 text-center mtb-10">{props.text}</p>
        </div>
    )
}
