import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  console.log("checkbox",{ id, checked, onChange })

  const [checkboxStatus, setCheckboxStatus] = useState(checked)
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        onChange={() => onChange()}
      />
    </div>
  )
}
