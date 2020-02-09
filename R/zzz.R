.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "sever-assets",
    system.file("assets", package = "sever")
  )
}