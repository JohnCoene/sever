#' Dependnecies
#' 
#' Import dependencies, place this in your shiny UI.
#' 
#' @export
use_sever <- function(){
  shiny::singleton(
    shiny::tags$head(
      shiny::tags$style(
        "#ss-connect-dialog{display: none !important;}"
      ),
      shiny::tags$script(
        src = "sever-assets/init.js"
      )
    )
  )
}

#' Sever
#' 
#' Customise the Shiny disconnected screen.
#' 
#' @param ... Shiny tags to use as content for the disconnected screen.
#' @param bg_color,color Background color, color of text.
#' @param opacity Opacity of background. 
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
sever <- function(..., bg_color = "#333e48", color = "#fff", opacity = 1, session = shiny::getDefaultReactiveDomain()){

  content <- shiny::tagList(...)
  content <- as.character(content)

  msg <- list(content = content, bg_color = bg_color, color = color, opacity = opacity)

  session$sendCustomMessage("sever-it", msg)
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
  shiny::tags$button(text, onClick = "location.reload();", class = class)
}

#' @rdname reload
#' @export
reload_link <- function(text = "reload", class = c("default", "danger", "info", "success", "warning")){
  class <- match.arg(class)
  class <- paste0("text-", class)
  shiny::tags$a(text, onClick = "location.reload();", class = class)
}