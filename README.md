<div align="center">

<img src="./man/figures/logo.png" height=200/>

<!-- badges: start -->
[![Travis build status](https://travis-ci.org/JohnCoene/sever.svg?branch=master)](https://travis-ci.org/JohnCoene/sever)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/sever?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/sever)
![R-CMD-check](https://github.com/JohnCoene/sever/workflows/R-CMD-check/badge.svg)
[![CircleCI build status](https://circleci.com/gh/JohnCoene/sever.svg?style=svg)](https://circleci.com/gh/JohnCoene/sever)
[![R build status](https://github.com/JohnCoene/sever/workflows/R-CMD-check/badge.svg)](https://github.com/JohnCoene/sever/actions)
<!-- badges: end -->

Good-looking problems: customise your Shiny disconnected screen and error messages.

[Docs](https://sever.john-coene.com) | [Get Started](https://sever.john-coene.com/sever/)

</div>

## Usage

Include dependencies with `useSever` then use the `sever` function to customise the screen, launch the app and stop the server to see the customised screen.

``` r
library(shiny)
library(sever)

ui <- fluidPage(
  useSever(), # import dependencies
  h1("sever")
)

server <- function(input, output){
  sever() # customise
}

shinyApp(ui, server)
```

![](https://sever.john-coene.com/img/sever_example.png)

## Get it

Get it from CRAN with:

``` r
install.packages("sever")
```

Install it from Github with:

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/sever")
```
