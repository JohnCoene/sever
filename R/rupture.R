#' Rupture
#' 
#' Displays a disconnected screen after `ms` milliseconds of inactivity.
#' 
#' @param html Shiny tags to use as content for the disconnected screen,
#' generally [shiny::tagList()].
#' @param bg_color,color Background color, color of text.
#' @param opacity Opacity of background. 
#' @param bg_image Background image to use.
#' @param session A valid shiny session.
#' @param box Set to `TRUE` to enclose the `html` in a box.
#' @param ms Milliseconds before showing the disconnected screen,
#' defaults to `1000 * 60 * 15` which is 15 minutes (same as shinyapps.io).
#' 
#' @return None
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'  use_sever(),
#'  h1("rupture")
#' )
#' 
#' server <- function(input, output){
#'  rupture(
#'    tagList(
#'      h1("Whoops"),
#'      reconnect_button()
#'    )
#'  )
#' }
#' 
#' if(interactive())
#'  shinyApp(ui, server)
#' 
#' @export
rupture <- function(html = rupture_default(), color = "#fff", opacity = 1, 
  bg_color = "#333e48", bg_image = NULL, ms = 1000 * 60 * 15,
  session = shiny::getDefaultReactiveDomain(), box = FALSE){

  html <- as.character(html)
  msg <- list(
    content = html, 
    bg_color = bg_color, 
    color = color, 
    opacity = opacity,
    bg_image = bg_image,
    box = box,
    ms = ms
  )

  session$sendCustomMessage("rupture-it", msg)

  invisible()
}

#' Reload
#' 
#' Create a button to reload/reconnect to shiny.
#' 
#' @inheritParams reload_button
#' 
#' @section Functions:
#' \itemize{
#'  \item{`reconnect_button` - Returns a button.}
#'  \item{`reconnect_link` - Returns a link.}
#'  \item{`f7_reconnect_button` - A reconnect button for shinyMobile.}
#' }
#' 
#' @return A button or link in the form of [shiny::tags].
#' 
#' @name reconnect
#' @export
reconnect_button <- function(text = "reconnect", class = c("default", "danger", "info", "success", "warning")){
  class <- match.arg(class)
  class <- paste0("btn btn-", class)
  tags$button(text, onClick = "window.unrupt();", class = class)
}

#' @rdname reconnect
#' @export
reconnect_link <- function(text = "reconnect", class = c("default", "danger", "info", "success", "warning")){
  class <- match.arg(class)
  class <- paste0("text-", class)
  tags$a(text, onClick = "window.unrupt();", class = class)
}

#' @rdname reconnect
#' @export
f7_reconnect_button <- function(text = "reconnect", color = "#000"){
  shiny::tags$button(
    text,
    style = paste0("color:", color, ";background-color:#fff;"),
    class = "button button-raised",
    onClick = "window.unrupt();"
  )
}

#' Default Rupture Screen
#' 
#' The default rupture screen for convenience.
#' 
#' @inheritParams sever_default
#' 
#' @return \code{shiny::tags}.
#' 
#' @export
rupture_default <- function(title = "Idle", subtitle = "Your session is disconnected", button = "Reconnect", button_class = "default"){
  tagList(
    tags$h1(title),
    tags$p(subtitle),
    reconnect_button(button, class = button_class)
  )
}