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
    CLEAVE_CENTER_HORIZONTAL = TRUE,
    CHISEL_COLOR = "darkgrey",
    CHISEL_BG_COLOR = NULL,
    CHISEL_DURATION = .1,
    CHISEL_CENTER_VERTICAL = TRUE,
    CHISEL_CENTER_HORIZONTAL = TRUE
  )
}