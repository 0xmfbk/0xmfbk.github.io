/**
 * Smoothly scrolls to a specific section with navbar offset
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (!element) return

  // Get the navbar height to offset the scroll position
  const navbarHeight = document.querySelector("nav")?.offsetHeight || 0

  // Calculate the position to scroll to
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

  // Smooth scroll to the section
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })

  // Update URL hash without scrolling (optional)
  history.pushState(null, "", `#${id}`)
}
