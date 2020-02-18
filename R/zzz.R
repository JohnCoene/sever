.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "sever-assets",
    system.file("assets", package = "sever")
  )

  options(
    CLEAVE_COLOR = "red",
    CLEAVE_BG_COLOR = NULL,
    CLEAVE_DURATION = .1,
    CLEAVE_CENTER_VERTICAL = TRUE,
    CLEAVE_CENTER_HORIZONTAL = TRUE
  )
}