#' Cleave
#' 
#' Customise error messages.
#' 
#' @param html Html content to display instead of error messages, 
#' if \code{NULL} the original message is displyed.
#' @param color Color of error message text.
#' @param bg_color Background color of error message overlay. 
#' If \code{NULL} will be transparent.
#' @param center Whether to center the message vertically and horizontally, a \code{boolean}.
#' @param session A valid shiny session.
#' @param ids Ids of elements to apply the cleave to. If \code{NULL} applies to all error messages.
#' @param duration Duration of animation showing the error message, set to \code{0} to have none.
#' 
#' @export
cleave <- function(html = NULL, color = NULL, bg_color = NULL, duration = NULL, center = NULL, ids = NULL, session = shiny::getDefaultReactiveDomain()){

  if(!is.null(html)){

    # force span to not break innerHTML function
    if(!inherits(html, "shiny.tag") || !inherits(html, "shiny.tag.list"))
      html <- tags$span(html)

    html <- as.character(html)
  }

  # force list of forEach fails
  if(!is.null(ids)) ids <- as.list(ids)

  color <- get_option("CLEAVE_COLOR", color)
  bg_color <- get_option("CLEAVE_BG_COLOR", bg_color)
  center <- get_option("CLEAVE_CENTER", center)
  duration <- get_option("CLEAVE_DURATION", duration)

  msg <- list(html = html, color = color, bg_color = bg_color, center = center, ids = ids, duration = duration)

  session$sendCustomMessage("cleave-it", msg)
}

#' Cleave Theme
#' 
#' Define a theme to apply to all subsequent \code{\link{cleave}}.
#' 
#' @inheritParams cleave
#' 
#' @export
cleave_theme <- function(color = "red", bg_color = NULL, duration = .3, center = TRUE){
  options(
    CLEAVE_COLOR = color,
    CLEAVE_BG_COLOR = bg_color,
    CLEAVE_DURATION = duration,
    CLEAVE_CENTER = center
  )
  invisible()
}

get_option <- function(option, value){
  if(is.null(value))
    value <- getOption(option)
  
  return(value)
}