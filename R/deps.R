#' Dependnecies
#'
#' Import dependencies, place this in your shiny UI.
#'
#' @importFrom shiny tags singleton tagList
#'
#' @return [shiny::tags] containing the necessary dependencies.
#' 
#' @name dependencies
#' @export
use_sever <- function(){
  singleton(
    tags$head(
      tags$link(href = "sever-assets/style.css", rel = "stylesheet"),
      tags$script(src = "sever-assets/sever.js"),
      tags$script(src = "sever-assets/rupture.js"),
      tags$script(src = "sever-assets/cleave.js")
    )
  )
}
