#' Get Cleave Theme
#' 
#' Returns the \code{option} unless the \code{value} is set.
#' 
#' @param option Name of the theme option to fetch.
#' @param value Value to return if \code{value} is \code{NULL}.
#' 
#' @return A character string.
#' 
#' @keywords internal
get_theme <- function(
  option, 
  value
){
  if(is.null(value))
    value <- getOption(option)
  
  return(value)
}

#' Get Golem Option
#' 
#' Get golem option to use whether or not to use \code{cleave} and \code{sever}.
#' 
#' @return The golem prod option, if not set returns \code{TRUE}.
#' 
#' @keywords internal
get_golem_option <- function(){
  getOption("golem.app.prod", TRUE)
}

#' Uses Golem
#' 
#' Checks if uses golem.
#' 
#' @name using_golem
#' @export
uses_golem <- function(){
  has_opts <- getOption("golem.app.prod")
  !is.null(has_opts)
}

#' @rdname using_golem
#' @export
runs_golem <- function(){
  uses_golem <- uses_golem()
  golem_option <- get_golem_option()

  if(uses_golem){
    if(golem_option)
      cli::cli_alert_success("Golem in prod: using cleave and sever")
    else
      cli::cli_alert_danger("Golem in dev: not using cleave and sever")
  }

  invisible(golem_option)
}
