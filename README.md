<div align="center">

<img src="./man/figures/logo.png" height=200/>

<!-- badges: start -->
[![Travis build status](https://travis-ci.org/JohnCoene/sever.svg?branch=master)](https://travis-ci.org/JohnCoene/sever)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/sever?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/sever)
[![CircleCI build status](https://circleci.com/gh/JohnCoene/sever.svg?style=svg)](https://circleci.com/gh/JohnCoene/sever)
[![Lifecycle: experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
<!-- badges: end -->

Good-looking problems: customise your Shiny disconnected screen and error messages.

</div>

## Usage

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

![](https://sever.john-coene.com/img/sever_example.png)

## Get it

Install it from Github with:

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/sever")
```
