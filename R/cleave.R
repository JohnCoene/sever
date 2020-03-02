#' Cleave
#' 
#' Customise error messages.
#' 
#' @param html Html content to display instead of error messages, 
#' if \code{NULL} the original message is displyed.
#' @param color Color of error message text.
#' @param bg_color Background color of error message overlay. 
#' If \code{NULL} will be transparent.
#' @param center_vertical,center_horizontal Whether to center the message vertically and horizontally, a \code{boolean}.
#' @param session A valid shiny session.
#' @param ids Ids of elements to apply the cleave to. If \code{NULL} applies to all error messages.
#' @param duration Duration of animation showing the error message, set to \code{0} to have none.
#' 
#' @return None
#' 
#' @export
cleave <- function(html = NULL, color = NULL, bg_color = NULL, duration = NULL, center_vertical = NULL,
  center_horizontal = NULL, ids = NULL, session = shiny::getDefaultReactiveDomain()){

  if(!is.null(html)){

    # force span to not break innerHTML function
    if(!inherits(html, "shiny.tag") || !inherits(html, "shiny.tag.list"))
      html <- tags$span(html)

    html <- as.character(html)
  }

  # force list of forEach fails
  if(!is.null(ids)) ids <- as.list(ids)

  color <- get_theme("CLEAVE_COLOR", color)
  bg_color <- get_theme("CLEAVE_BG_COLOR", bg_color)
  center_horizontal <- get_theme("CLEAVE_CENTER_HORIZONTAL", center_horizontal)
  center_vertical <- get_theme("CLEAVE_CENTER_VERTICAL", center_vertical)
  duration <- get_theme("CLEAVE_DURATION", duration)

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
    session$sendCustomMessage("cleave-it", msg)

  invisible()
}

#' Cleave Theme
#' 
#' Define a theme to apply to all subsequent \code{\link{cleave}}.
#' 
#' @inheritParams cleave
#' 
#' @return None
#' 
#' @export
cleave_theme <- function(color = "red", bg_color = NULL, duration = .1, center_vertical = TRUE,
  center_horizontal = TRUE){
  options(
    CLEAVE_COLOR = color,
    CLEAVE_BG_COLOR = bg_color,
    CLEAVE_DURATION = duration,
    CLEAVE_CENTER_VERTICAL = center_vertical,
    CLEAVE_CENTER_HORIZONTAL = center_horizontal
  )
  invisible()
}
