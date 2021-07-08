#' Dependencies
#'
#' Import dependencies, place this in your shiny UI.
#'
#' @importFrom htmltools htmlDependency tagList
#' @importFrom shiny tags
#'
#' @return [shiny::tags] containing the necessary dependencies.
#' 
#' @name dependencies
#' @export
useSever <- function(){
  htmlDependency(
    "sever",
    version = utils::packageVersion("sever"),
    package = "sever",
    src = "packer",
    script = "sever.js"
  )
}

#' @rdname dependencies
#' @export
use_sever <- function(){
  .Deprecated("useSever", "sever")
  useSever()
}
