import { Slider, styled } from "@material-ui/core"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

function createMarks(labels: string[]): any[] {
  return labels.map((label, index) => {
    return { value: index, label }
  })
}

class DiscreteSlider extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const vMargin = 7
    const hMargin = 20

    const StyledSlider = styled(Slider)({
      margin: `${vMargin}px ${hMargin}px`,
      width: this.props.width - (hMargin * 2),
    })

    const options = this.props.args["options"]

    return (
      <StyledSlider
        defaultValue={0}
        min={0}
        max={options.length - 1}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="off"
        marks={createMarks(options)}
        onChangeCommitted={(event, value) => {
          const selectedOption = options[Number(value)]
          Streamlit.setComponentValue(selectedOption)
        }}
        disabled={this.props.disabled}
      />
    )
  }
}

export default withStreamlitConnection(DiscreteSlider)
