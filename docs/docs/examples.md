# Examples

## Combine

You can of course combine sever and cleave.

```r
library(shiny)
library(sever)

ui <- fluidPage(
  use_sever(),
  uiOutput("error")
)

server <- function(input, output){
  sever()
  cleave("Gah!")

  output$error <- renderPrint(error)
}

shinyApp(ui, server)
```

## Server Defined Variables

You can use variables defined server-side to deliver for informative messages.

```r
library(shiny)
library(sever)

ui <- fluidPage(
  use_sever(),
  textInput("name", "Your name")
)

server <- function(input, output){
  
  observeEvent(input$name, {
    msg <- p(input$name, "broke the app :(")
    sever(msg)
  })
}

shinyApp(ui, server)
```

![](./img/example_02.png)
