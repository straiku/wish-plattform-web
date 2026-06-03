'use client'

import { Bars } from '@gravity-ui/icons'
import { Dropdown, Label } from '@heroui/react'

interface NavMobilButtonHeaderProps {
  buttonClass?: string
  scrollToSection: (id: string) => void
}

export function NavMobilButtonHeader({ buttonClass, scrollToSection }: NavMobilButtonHeaderProps) {
  return (
    <Dropdown>
      {/* Dropdown.Trigger renders a HeroUI Button internally, so we pass button props directly */}
      <Dropdown.Trigger
        className={buttonClass}
        aria-label="Menu"
        {...({ isIconOnly: true, variant: 'ghost' } as any)}
      >
        <Bars className="pointer-events-none outline-none" />
      </Dropdown.Trigger>

      <Dropdown.Popover className="min-w-[240px] bg-white/50 backdrop-blur-md">
        <Dropdown.Menu onAction={(key) => scrollToSection(key.toString())}>
          <Dropdown.Section>
            <Dropdown.Item id="inicio" textValue="Inicio">
              <div className="flex flex-col">
                <Label className="pointer-events-none font-bold">Inicio</Label>
              </div>
            </Dropdown.Item>

            <Dropdown.Item id="preview" textValue="Preview">
              <div className="flex flex-col">
                <Label className="pointer-events-none font-bold">Preview</Label>
              </div>
            </Dropdown.Item>
          </Dropdown.Section>

          <Dropdown.Section>
            <Dropdown.Item id="remixes" textValue="Remixes">
              <div className="flex flex-col">
                <Label className="pointer-events-none font-bold">Remixes</Label>
              </div>
            </Dropdown.Item>
          </Dropdown.Section>

          <Dropdown.Section>
            <Dropdown.Item id="mixwish" textValue="MixWish">
              <div className="flex flex-col">
                <Label className="pointer-events-none font-bold">MixWish</Label>
              </div>
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
