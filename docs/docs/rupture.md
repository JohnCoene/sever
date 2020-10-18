# Rupture

The `rupture` function allows displaying a screen that appears after the user has been idle for `ms` milliseconds.

``` r
library(shiny)
library(sever)

ui <- fluidPage(
 use_sever(),
 h1("rupture"),
 p("Wait for idle screen")
)

server <- function(input, output){
  # set ms to 5 seconds for test
 rupture(ms = 5000)
}

shinyApp(ui, server)
```

![](./img/sever_example.png)

This consists of a new family of functions mirroring that of `sever` which work exactly the same way.
