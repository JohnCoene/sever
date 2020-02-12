# sever

Sever will let you customise the Shiny disconnected screen.

## Basics

Include dependencies with `use_sever` then use the `sever` function to customise the screen, launch the app and stop the server to see the customised screen.

``` r
library(shiny)
library(sever)

ui <- fluidPage(
  use_sever(),
  h1("sever")
)

server <- function(input, output){
  sever()
}

shinyApp(ui, server)
```

![](./img/sever_example.png)

## Customise

The first argument `sever` (`html`) is used to specify the html to be displayed on the disconnected screen and defaults to `sever_default`; you can of course change that behaviour.

``` r
library(shiny)
library(sever)

disconnected <- tagList(
  h1("Whoah there..."),
  p("Something went terrible wrong!"),
  reload_button("REFRESH", class = "warning")
)

ui <- fluidPage(
  use_sever(),
  h1("sever")
)

server <- function(input, output){
  sever(html = disconnected, bg_color = "#000")
}

shinyApp(ui, server)
```

![](./img/sever_example2.png)

If you want to even further customise the screen with CSS; it is assigned the `severed` CSS class.