#' Dependnecies
#' 
#' Import dependencies, place this in your shiny UI.
#' 
#' @importFrom shiny tags singleton tagList
#' 
#' @name dependencies
#' @export
use_sever <- function(){
  singleton(
    tags$head(
      tags$link(href = "sever-assets/style.css", rel = "stylesheet"),
      tags$script(src = "sever-assets/sever.js"),
      tags$script(src = "sever-assets/cleave.js")
    )
  )
}

#' Sever
#' 
#' Customise the Shiny disconnected screen.
#' 
#' @param html Shiny tags to use as content for the disconnected screen,
#' generally \link[shiny]{tagList}.
#' @param bg_color,color Background color, color of text.
#' @param opacity Opacity of background. 
#' @param bg_image Background image to use.
#' @param session A valid shiny session.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'  use_sever(),
#'  h1("sever")
#' )
#' 
#' server <- function(input, output){
#'  sever(
#'    tagList(
#'      h1("Whoops"),
#'      reload_button()
#'    )
#'  )
#' }
#' 
#' if(interactive())
#'  shinyApp(ui, server)
#' 
#' @export
sever <- function(html = sever_default(), color = "#fff", opacity = 1, 
  bg_color = "#333e48", bg_image = NULL, 
  session = shiny::getDefaultReactiveDomain()){

  html <- as.character(html)

  msg <- list(
    content = html, 
    bg_color = bg_color, 
    color = color, 
    opacity = opacity,
    bg_image = bg_image
  )

  is_running_golem <- runs_golem()

  if(is_running_golem)
    session$sendCustomMessage("sever-it", msg)

  invisible()
}

#' Reload
#' 
#' Create a button to reload shiny.
#' 
#' @param text The text to use on the button.
#' @param class The class to apply to the button.
#' 
#' @rdname reload
#' @export
reload_button <- function(text = "reload", class = c("default", "danger", "info", "success", "warning")){
  class <- match.arg(class)
  class <- paste0("btn btn-", class)
  tags$button(text, onClick = "location.reload();", class = class)
}

#' @rdname reload
#' @export
reload_link <- function(text = "reload", class = c("default", "danger", "info", "success", "warning")){
  class <- match.arg(class)
  class <- paste0("text-", class)
  tags$a(text, onClick = "location.reload();", class = class)
}

#' Default Sever Screen
#' 
#' The default sever screen for convenience.
#' 
#' @param title,subtitle Title and subtitle to display.
#' @param button Text to display on button, passed to \code{\link{reload_button}}.
#' @param button_class Class of button, passed to \code{\link{reload_button}}.
#' 
#' @export
sever_default <- function(title = "Whoops!", subtitle = "You have been disconnected", button = "Reload", button_class = "default"){
  tagList(
    tags$h1(title),
    tags$p(subtitle),
    reload_button(button, class = button_class)
  )
}