import { useEffect, useState } from "react"
import { animate, useMotionValue, motion } from "motion/react"

import useTheme from "../../hooks/useTheme"
import Icon from "../shared/Icon"
import { cn } from "@/lib/utils"

// Theme-aware color configurations (paleta del sitio: greys + secondary verde)
const themes = {
  dark: {
    bg: "#191d2b", // --color-primary
    containerBg: "#2a2e35", // --color-grey-5
    underLayerBg: "#12161f",
    borderFrom: "#0d1119",
    borderVia: "#1a2029",
    borderTo: "#2a2e35",
    wellBg: "#12161f",
    innerRingBg: "#10141c",
    buttonBg: "#2a2e35",
    textActive: "text-white",
    textInactive: "text-[#b2becd] hover:text-zinc-100", // --color-grey-2
    iconColor: "text-[#b2becd] hover:text-white",
  },
  light: {
    bg: "#ffffff",
    containerBg: "#ffffff",
    underLayerBg: "#dce0e4", // --color-grey-5 (light)
    borderFrom: "#b7bfc7",
    borderVia: "#d3d8de",
    borderTo: "#e2e6ea",
    wellBg: "#dce0e4",
    innerRingBg: "#d2d8de",
    buttonBg: "#ffffff",
    textActive: "text-[#191d2b]",
    textInactive: "text-[#6c7983] hover:text-[#454e56]", // --color-grey-3/4
    iconColor: "text-[#454e56] hover:text-[#1e9b54]", // --color-grey-4 / secondary
  },
}

const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "portfolio", label: "Portfolio", icon: "briefcase" },
  { id: "contact", label: "Contact", icon: "envelope-open" },
]

function InnerButtonOverlay({ isOverlayActive, isDarkMode }) {
  const overlayProgress = useMotionValue(isOverlayActive ? 1 : 0)

  useEffect(() => {
    const controls = animate(overlayProgress, isOverlayActive ? 1 : 0, {
      delay: isOverlayActive ? 0.02 : 0,
      duration: isOverlayActive ? 0.18 : 0.14,
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [isOverlayActive, overlayProgress])

  return (
    <motion.span
      initial={false}
      className="absolute inset-0 rounded-[10px]"
      animate={
        isOverlayActive
          ? {
              borderWidth: 1,
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)",
            }
          : {
              borderWidth: 0,
              borderColor: "transparent",
              boxShadow: "none",
            }
      }
      transition={{
        borderColor: {
          duration: 0.16,
          ease: "easeOut",
        },
      }}
      style={{
        borderStyle: "solid",
      }}
    />
  )
}

export function GradientButtonGroup({
  activeSection = "home",
  onNavigate,
  className,
}) {
  const [overlayReadyId, setOverlayReadyId] = useState(activeSection)
  const { isLightMode, toggleTheme } = useTheme()
  const isDarkMode = !isLightMode

  const theme = isDarkMode ? themes.dark : themes.light
  const activeId = activeSection

  return (
    <div className={cn("flex w-full justify-center py-1", className)}>
      <div className="inline-flex min-w-max origin-center scale-[0.72] items-center sm:scale-[0.82] md:scale-[0.9] lg:scale-100">
        <div className="relative inline-flex items-center">
          {/* Background tray layer (recessed) - spans full width including theme toggle */}
          <div
            className="absolute inset-0 z-0 rounded-[28px] transition-colors duration-300"
            style={{
              background: isDarkMode
                ? "linear-gradient(180deg, #1a1f29 0%, #161b24 50%, #12161e 100%)"
                : "linear-gradient(180deg, #c9cfd6 0%, #c2c8cf 50%, #bac1c8 100%)",
              boxShadow: isDarkMode
                ? "inset 0 2px 8px rgba(0,0,0,0.65), inset 0 1px 2px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04)"
                : "inset 0 2px 6px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.55)",
            }}
          />

          {/* Foreground nav layer (raised) - sits on the left */}
          <div className="relative flex z-10">
            {/* Outer rim/bezel */}
            <div
              className="absolute -inset-[4px] rounded-[28px] border-[1px] transition-colors duration-300"
              style={{
                background: isDarkMode ? "#0d1119" : "#d6dbe0",
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.08)",
              }}
            />

            {/* Inner container */}
            <nav
              className="relative inline-flex items-center gap-3 rounded-[24px] p-1.5 transition-colors duration-300"
              style={{
                background: isDarkMode
                  ? "linear-gradient(180deg, #2e353f 0%, #282f38 52%, #232a33 100%)"
                  : "linear-gradient(180deg, #ffffff 0%, #fdfdfe 52%, #fafbfc 100%)",
                borderTop: isDarkMode
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(255,255,255,1)",
                boxShadow: isDarkMode
                  ? "none"
                  : "0 1px 2px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id
                const isOverlayActive = isActive && overlayReadyId === item.id

                const wellStyle = isDarkMode
                  ? {
                      background:
                        "linear-gradient(180deg, #12161f 0%, #161b24 50%, #13171f 100%)",
                      boxShadow:
                        "inset 0 2px 6px rgba(0,0,0,0.85), inset 0 0 4px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06)",
                    }
                  : {
                      background:
                        "linear-gradient(180deg, #d6dbe0 0%, #cdd3d9 50%, #c9cfd6 100%)",
                      boxShadow:
                        "inset 0 2px 6px rgba(0,0,0,0.12), inset 0 0 4px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9)",
                    }

                const innerGapStyle = isDarkMode
                  ? {
                      background: "#10141c",
                      boxShadow:
                        "inset 0 1px 3px rgba(0,0,0,0.85), inset 0 0 2px rgba(0,0,0,0.6)",
                    }
                  : {
                      background: "#dce0e4",
                      boxShadow:
                        "inset 0 1px 3px rgba(0,0,0,0.16), inset 0 0 2px rgba(0,0,0,0.08)",
                    }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (item.id === activeId) {
                        return
                      }
                      setOverlayReadyId(null)
                      onNavigate?.(item.id)
                    }}
                    className={cn(
                      "group/nav relative flex h-[76px] w-[76px] items-center justify-center rounded-[18px] transition-all duration-300",
                      isActive ? theme.textActive : theme.textInactive
                    )}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Layered inset effect for active state - animated with layoutId */}
                    {isActive && (
                      <>
                        {/* Inset well/channel - creates the recessed groove */}
                        <motion.span
                          layoutId="active-well"
                          className="absolute inset-0 rounded-[18px] transition-colors duration-300"
                          style={wellStyle}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />

                        {/* Green ring container */}
                        <motion.span
                          layoutId="active-green-ring"
                          className="absolute inset-[3px] overflow-hidden rounded-[15px]"
                          onLayoutAnimationComplete={() =>
                            setOverlayReadyId(item.id)
                          }
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        >
                          {/* Spinning gradient ring (secondary verde del sitio) */}
                          <span
                            className="absolute inset-[-60%] origin-center will-change-transform animate-green-spin"
                            style={{
                              background:
                                "conic-gradient(from 220deg, #27AE60 0%, #2FCC71 16%, #6BE79D 33%, #A9F0C4 50%, #6BE79D 66%, #2FCC71 82%, #27AE60 100%)",
                            }}
                          />
                        </motion.span>

                        {/* Inner gap - thin dark channel between ring and button */}
                        <motion.span
                          layoutId="active-inner-ring"
                          className="absolute inset-[6px] rounded-[12px] transition-colors duration-300"
                          style={innerGapStyle}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      </>
                    )}

                    {/* Inner button background */}
                    <motion.span
                      initial={false}
                      className={cn(
                        "relative z-10 flex items-center justify-center rounded-[10px]",
                        isActive
                          ? "h-[calc(100%-18px)] w-[calc(100%-18px)]"
                          : "h-full w-full"
                      )}
                      animate={
                        isActive
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {
                              scale: 0.985,
                              opacity: 0.96,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        delay: isActive ? 0.12 : 0,
                      }}
                    >
                      <InnerButtonOverlay
                        isOverlayActive={isOverlayActive}
                        isDarkMode={isDarkMode}
                      />
                      <span className="relative z-10">
                        <Icon name={item.icon} className="h-6 w-6" />
                      </span>
                    </motion.span>
                  </button>
                )
              })}
            </nav>
            {/* Theme toggle - sits in the recessed tray on the right */}
            <div className="relative z-[1] flex items-center px-4">
              <button
                type="button"
                onClick={() => toggleTheme()}
                className={cn(
                  "relative flex h-[60px] w-[60px] items-center justify-center rounded-[16px] transition-colors",
                  theme.iconColor
                )}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M6.34 17.66l-1.41 1.41" />
                    <path d="M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0 lg:hidden" />
    </div>
  )
}