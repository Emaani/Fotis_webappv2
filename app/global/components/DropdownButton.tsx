import { faAngleDoubleDown, faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

type TypeDropDownOption = {
    text: string
    onClick?: () => void
}

type TypeDropdownButtonProps = {
    buttonClass: string,
    options: TypeDropDownOption[]
}

const DropdownButton = ({ buttonClass, options }: TypeDropdownButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative inline-block ">
            <button onClick={() => setIsOpen(!isOpen)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={buttonClass} type="button">
                <div className="flex gap-1">
                    Actions
                   <span className=" flex flex-col justify-center"> <FontAwesomeIcon width={10} icon={faAngleDown} /></span>
                </div>
            </button>
            <div className={"dropdown shadow-lg border  " + (isOpen ? '' : 'hidden')}>
                <ul className="dropdown-content">
                    {
                        options.map((item, key) =>
                            <li key={key}>
                                <a href="#!" onClick={() => item.onClick&& item.onClick()} className="dropdown-item">{item.text}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DropdownButton