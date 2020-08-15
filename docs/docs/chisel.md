# Chisel

The latest version of sever adds a `chisel` function which changes error messages raised by `validate` and `need`. These are referred to as "silent errors." This is useful if one also wants to apply styling to those softer errors. 

```r
library(shiny)
library(sever)

ui <- fluidPage(
  use_sever(),
  fluidRow(
    selectInput("required_input", "Required input",
      choices = c("Red pill", "Blue pill"), 
      multiple = TRUE
    ),
    uiOutput("thing")
  )
)

server <- function(input, output){
  cleave()
  chisel(color = "black", center_horizontal = FALSE)
  
  # will generate errors
  output$thing <- renderUI({
    validate(need(input$required_input, "Required input is required 😂"))
    if("Red pill" %in% input$required_input) {
      h1("Good choice!")
    } else {
      stop("A regrettable decision.")
    }
  })
  
}

shinyApp(ui, server)
```

Note that one can also have these with `cleave` but then both hard and silent errors will have the same styling: `cleave(silent_errors = TRUE)`.
