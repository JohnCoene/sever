#' Chisel
#' 
#' Customise silent error messages: messages raised by [shiny::validate()] and [shiny::need()]. 
#' If used in combination with [cleave()] make sure you are setting `silent_errors` to `FALSE`.
#' 
#' @inheritParams cleave
#' 
#' @return None
#' 
#' @export
chisel <- function(
  html = NULL, 
  color = NULL, 
  bg_color = NULL, 
  duration = NULL, 
  center_vertical = NULL,
  center_horizontal = NULL, 
  ids = NULL, 
  session = shiny::getDefaultReactiveDomain()
){

  if(!is.null(html)){

    # force span to not break innerHTML function
    if(!inherits(html, "shiny.tag") || !inherits(html, "shiny.tag.list"))
      html <- tags$span(html)

    html <- as.character(html)
  }

  # force list of forEach fails
  if(!is.null(ids)) ids <- as.list(ids)

  color <- get_theme("CHISEL_COLOR", color)
  bg_color <- get_theme("CHISEL_BG_COLOR", bg_color)
  center_horizontal <- get_theme("CHISEL_CENTER_HORIZONTAL", center_horizontal)
  center_vertical <- get_theme("CHISEL_CENTER_VERTICAL", center_vertical)
  duration <- get_theme("CHISEL_DURATION", duration)

  msg <- list(
    html = html, 
    color = color, 
    bg_color = bg_color, 
    center_vertical = center_vertical,
    center_horizontal = center_horizontal,
    ids = ids, 
    duration = duration
  )

  is_running_golem <- runs_golem()
  
  if(is_running_golem)
    session$sendCustomMessage("chisel-it", msg)

  invisible()
}

#' Chisel Theme
#' 
#' Define a theme to apply to all subsequent [chisel()].
#' 
#' @inheritParams cleave
#' 
#' @return None
#' 
#' @export
chisel_theme <- function(
  color = "darkgrey", 
  bg_color = NULL, 
  duration = .1, 
  center_vertical = TRUE,
  center_horizontal = TRUE
){
  options(
    CHISEL_COLOR = color,
    CHISEL_BG_COLOR = bg_color,
    CHISEL_DURATION = duration,
    CHISEL_CENTER_VERTICAL = center_vertical,
    CHISEL_CENTER_HORIZONTAL = center_horizontal
  )
  invisible()
}
