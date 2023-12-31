import React from 'react'
import styled from 'styled-components'

import useKeypress, { Keys } from '../hooks/useKeyPress'

export type SlideOutPanelProps = {
  children?: React.ReactNode
  open?: boolean
  level?: number
  width?: string
  onClose?(): void
  'aria-labelledby'?: string
}

export const slideOutTransitionDuration = 300

const TransparentBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const SlideOutPanelContainer = styled.div<{
  level: number
  open: boolean
  width?: string
}>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? 0 : -900)}px;
  z-index: ${({ level }) => 100 + level};
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow-y: auto;
  transition-duration: 0.2s;
  max-width: ${({ width }) => (width ? width : '900px')};
  height: 100%;
  width: 100%;

  box-shadow:
    0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`

const Backdrop = styled.div<{ visible: boolean }>`
  position: fixed;
  z-index: 10;
  background-color: var(--dropdown-backdrop);
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity ${slideOutTransitionDuration}ms ease;
`
const SlideOutPanel = ({
  children,
  open = false,
  level = 0,
  width,
  onClose,
  ['aria-labelledby']: ariaLabelledBy,
}: SlideOutPanelProps) => {
  const [isVisible, setVisible] = React.useState(false)

  const close = () => {
    onClose?.()
  }

  useKeypress(Keys.ESCAPE, (e: KeyboardEvent) => {
    e.preventDefault()

    close()
  })

  React.useEffect(() => {
    if (open) {
      setTimeout(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [open])

  return (
    <>
      <Backdrop visible={level === 0 && isVisible} />
      {isVisible && <TransparentBackdrop onClick={close} />}
      <SlideOutPanelContainer
        role="dialog"
        aria-modal="true"
        level={level}
        width={width}
        open={isVisible}
        aria-labelledby={ariaLabelledBy}
      >
        {children}
      </SlideOutPanelContainer>
    </>
  )
}

export default SlideOutPanel
